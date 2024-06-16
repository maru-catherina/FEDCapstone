import { useState,useEffect } from "react";
function BookingForm ({availableTimes, setAvailableTimes, submitForm}) {
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [formContent, setFormContent] = useState({
        date: "",
        time: "17:00",
        people: "1",
        occasion: "Birthday",
      });

    const handleSubmit = (e) =>{
        e.preventDefault();
        submitForm(formContent);
    }

    useEffect(() => {
        if(formContent.date === ""){
            setDisableSubmit(true);
        }
        else{
            setDisableSubmit(false);
        }
    },[formContent]);

    return(
        
        <main className="formReserveContainer">
            <form onSubmit={handleSubmit} className="formReserve" id="form-component">
                <h2 className="formH2">Reserve a Table</h2>

                <div>
                    <label htmlFor="datela" className="formLabels">Choose a Date:</label> <br/>
                    <input type="date" name="date" id="date" value={formContent.date} onChange={(e)=> setFormContent({date: e.target.value})} required className="formInputs"></input>
                </div>
                <div>
                    <label htmlFor="time" className="formLabels">Choose a Time:</label><br/>
                    <select name="time" id="time" value={formContent.time} onChange={(e)=> setFormContent({time: e.target.value})} className="formInputs">
                        {availableTimes.map((element) => {
                            return (<option value={element} key={element}>{element}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="number" className="formLabels">Choose the number of people:</label><br/>
                    <input type="number" placeholder="1" min="1" max="10" name="number" id="number" value={formContent.people} onChange={(e)=> setFormContent({people: e.target.value})} className="formInputs"></input>
                </div>
                <div>
                    <label htmlFor="occasion" className="formLabels">Choose the Occasion:</label><br/>
                    <select name="occasion" id="occasion" value={formContent.occasion} onChange={(e)=> setFormContent({occasion: e.target.value})} className="formInputs">
                        <option value="Birthday">Birthday</option>
                        <option value="Business">Business</option>
                        <option value="Family">Family</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <input class='formReserveContainerbutton' type="submit" value="Request Table" disabled={disableSubmit} aria-label="On Click" className="formInputs"></input>
            </form>
        </main>
    );
}

export default BookingForm;