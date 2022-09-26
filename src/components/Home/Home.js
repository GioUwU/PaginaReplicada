import React from 'react';
import Welcomebar from '../Welcomebar/welcomebar';
import SearchAddUser from '../SearchAddUser/SearchAddUser';
import Charbarsclient from '../Charbarsclient/Charbarsclient';
import CharbarMovilWifi from '../CharbarMovilWifi/CharbarMovilWifi';
import Charbarplanuse from '../Charbarplansuse/Charbarplanuse';
import WindowClient from '../WindowClient/WindowClient';


export default function Home() {
    return (
        <div>
            <Welcomebar />
            <SearchAddUser />
            <Charbarsclient />
            <CharbarMovilWifi />
            <Charbarplanuse />
            <WindowClient />
        </div>
    );
}
