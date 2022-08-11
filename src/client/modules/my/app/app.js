//import { response } from "express";
import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";
//const BASE_URL = 'https://jobs.gitub.com/positions.json';
export default class App extends LightningElementWithBootstrap { 
    

    // description = ''
    // location = ''
    // full_time = false

    // connectedCallback() {
    //     this.fetchJobs();
    // }

    // fetchJobs() {
    //     const url = `${BASE_URL}?page=1&description=${this.description}&location=${this.location}&full_time=${this.full_time}`
    //     //this is an asynch call (fetch api) it will return a promise
    //     fetch(url).then(response => {
    //         response.json()
    //         console.log(response)
    //         }
    //        )
    //         .then(result => {
    //         console.log(result)
    //         })
    //         .catch(error => {
    //         console.error(error)
    //     })
    // }
}
