import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import { useState } from "react";
import TabButton from "../components/TabButton/TabButton";
import Section from "../components/Section/Section";
import Tabs from "../components/Tabs/Tabs";

export default function CustomerPage() {
    const [selectedTask, setSelectedTask] = useState('');

    function handleSelect(task) {
        setSelectedTask(task);
    }

    let tabContent;
    
    if(selectedTask){

        tabContent = (<div >
            <h3>hejsan</h3>
        </div>);
    }

    return (
        <main className="page_container">
            <section id="examples">
                <HomePageHeader title="Kunderegister" />

            </section>
        </main>
    );
}