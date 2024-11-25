import { Component } from "react";

class Temario extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <>
                <div className="Temario">
                    <h4>Temario</h4>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item"><a href="https://imgv2-2-f.scribdassets.com/img/document/322344712/original/8f3e2a3c96/1730214567?v=1">Temario Matemática-4B_humanidades</a></li>
                        <li className="list-group-item"><a href="https://image.slidesharecdn.com/temariointensivoeconomiaycivica-111024225126-phpapp02/85/Temario-intensivo-economia-y-civica-1-320.jpg">Temario Matemática-5B_economia</a></li>
                        <li className="list-group-item"><a href="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/6fbed47726090b4d750535b0bdf2692c/thumb_1200_1553.png">Temario Matemática-3A_humanidades</a></li>
                    </ol>
                </div>
            </>
         );
    }
}
 
export default Temario;