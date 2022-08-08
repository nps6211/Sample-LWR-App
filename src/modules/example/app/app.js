import {track,LightningElement} from 'lwc';

export default class HelloWorldApp extends LightningElement {
    @track inputVal = 'Default text';

    handleOnChnage(event){
        this.inputVal = event.target.value;
    }

    handleClick(event){
        this.inputVal = 'Changed By Click';
    }


    connectedCallback(){
        //console.log('In connected callback');
    }

    renderedCallback(){
        //console.log('In rendered callback');
    }
}