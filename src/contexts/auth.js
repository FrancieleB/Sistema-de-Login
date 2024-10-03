import { createContext, useEffect, useState, useMemo } from "react";
import firebase from "../firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                const userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    setUser({ ...currentUser, ...userData });
                } else {
                    setUser(currentUser);
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const signin = async (email, password) => {
        try {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
            const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                setUser({ ...user, ...userData });
            } else {
                setUser(user);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const signup = async (email, password, firstName, lastName, birthDate) => {
        try {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await user.updateProfile({ displayName: `${firstName} ${lastName}` });
            await firebase.firestore().collection('users').doc(user.uid).set({
                nome: firstName,
                sobrenome: lastName,
                dataNascimento: birthDate,
                email,
            });
            setUser({ ...user, nome: firstName, sobrenome: lastName, dataNascimento: birthDate });
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const signout = async () => {
        await firebase.auth().signOut();
        setUser(null);
    };

    const value = useMemo(() => ({
        user,
        signed: !!user,
        signin,
        signup,
        signout,
    }), [user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

