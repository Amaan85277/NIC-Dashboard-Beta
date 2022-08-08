import { useHistory } from 'react-router-dom';

function letLogout(){
    localStorage.clear();
    useHistory.push("Home");
}

export default function Logout(){
    return letLogout();
}