import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

type Lead = {
    email: string
}

type LeadsPageProps = {
    name: string
    leads: Lead[]
}


const LeadsPage : NextPage<LeadsPageProps> = (props) => {

    const { leads } = props

    return (
        <div>
            <h1> Lista de Leads </h1>
            <p> { props.name } </p>

            <ul>
                { leads.map((t, key) => (
                    <li key={key}> { t.email } </li>
                ))}
            </ul>

        </div>
    );
};

export default LeadsPage;

export const getServerSideProps : GetServerSideProps = async (context) => {

    const result = await axios.get("http://localhost:3000/api/leads")

    return {
        props: {
            name: "Teste",
            leads: result.data.leads
        }
    }
}
