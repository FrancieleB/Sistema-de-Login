import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    background-color: #fce4ec;
    padding: 20px;
`;

export const Content = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    border: 1px solid #ddd;
    max-width: 400px;
    padding: 30px;
    border-radius: 10px;
`;

export const Label = styled.label`
    font-size: 20px;
    font-weight: 700;
    color: #333;
`;

export const LabelSignup = styled.label`
    font-size: 16px;
    color: #555;
`;

export const LabelError = styled.label`
    font-size: 15px;
    color: #e63946;
`;

export const Strong = styled.strong`
    cursor: pointer;
    
    a {
        text-decoration: none;
        color: #8A2BE2;
        transition: color 0.2s;
        
        &:hover {
            color: #0056b3;
        }
    }
`;
