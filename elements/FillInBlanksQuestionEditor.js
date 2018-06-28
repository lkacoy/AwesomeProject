import {Component} from "react";

export default class FillInBlanksQuestionEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            points: 0,
            isTrue: true
        }
    }
}