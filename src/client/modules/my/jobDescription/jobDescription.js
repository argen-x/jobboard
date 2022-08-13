import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";
const IMAGE_URL = 'https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png'
import { api } from 'lwc'
import {dateFormatter} from '../../utils/utils'

export default class JobDescription extends LightningElementWithBootstrap {

    _selectedjob

    isLoaded = false
    get logoImage() {
        return IMAGE_URL
    }

    get formattedDate() {
        return dateFormatter(this.selectedJob.created_at)
    }

    @api get selectedJob() {
        return this._selectedjob 
    }

    set selectedJob(value) {
        this._selectedjob = {...value}
    }
    
    renderedCallback() {
        if (this.isLoaded) {
            return 
        } 
            let jobdescription = this.template.querySelector('.jobdescription')
            if (this.selectedJob.description) {
                // eslint-disable-next-line @lwc/lwc/no-inner-html
                jobdescription.innerHTML = this.selectedJob.description
                this.isLoaded = true
            }
        
    }


}
