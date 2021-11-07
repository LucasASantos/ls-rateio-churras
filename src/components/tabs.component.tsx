import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import PeopleComponent from './people.component';
import SpendComponent from './spend.component';
import TotalComponent from './total.component';

function TabComponent(): JSX.Element{
    return (
        <Tabs 
            defaultActiveKey="people" 
            id="uncontrolled-tab-example"
            className="mb-4 mt-3">
            <Tab eventKey="people" title="Pessoas">
                <PeopleComponent />
            </Tab>
            <Tab eventKey="spend" title="Gastos">
                <SpendComponent />
            </Tab>
            <Tab eventKey="total" title="Total">
                <TotalComponent />
            </Tab>
        </Tabs>
    );
}

export default TabComponent;
