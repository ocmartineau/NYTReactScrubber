import React from "react";
import "./searchbox.css";

class SearchBox extends React.Component {
    render () {
        return (
            <form>
                <div className="form-group">
                    <lable>
                        Topic:
                        <input  type="text" className="form-control"/>
                    </lable>
                    <lable>
                        Start Year
                        <input type="text" className="form-control"/>
                    </lable>
                    <lable>
                        End Year
                        <input type="text" className="form-control"/>
                    </lable>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default SearchBox;