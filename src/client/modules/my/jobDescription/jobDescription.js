import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";
const IMAGE_URL = 'https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png'
import { api } from 'lwc'
import {dateFormatter} from '../../utils/utils'

export default class JobDescription extends LightningElementWithBootstrap {

    _selectedjob = {}

    isLoaded = false
    get logoImage() {
        return IMAGE_URL
    }

    get formattedDate() {
        return dateFormatter(this.selectedjob.created_at)
    }

    @api get selectedjob() {
        return this._selectedjob 
    }

    set selectedjob(value) {
        const applyUrl = this.getApplyUrl(value.how_to_apply)
        this._selectedjob = {...value, applyUrl}
    }
    
    renderedCallback() {
        if (this.isLoaded) {
            return 
        } 
            let jobdescription = this.template.querySelector('.jobdescription')
            if (this.selectedjob.description) {
                // eslint-disable-next-line @lwc/lwc/no-inner-html
                jobdescription.innerHTML = this.selectedjob.description
                this.isLoaded = true
            }
        
    }

    getApplyUrl(str) {
        let url = ''
        str.split('href="').forEach(item => {
            if (item.startsWith("https") || item.startsWith("mailto")) {
                console.log(url)
                url = item.split('">')[0]
            }
        })
        return url
    }


}
