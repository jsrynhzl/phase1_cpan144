import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerNav from "../components/BannerNav";
import Footer from "../components/Footer";
import './Subscribe.css';

const Subscribe = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [preferences, setPreferences] = useState([])

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [preferencesError, setPreferencesError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        let hasError = false;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isValidEmail = email => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        if (!name.trim()) {
            setNameError("Name cannot be empty")
            hasError = true;
        } else {
            setNameError("")
        }

        if (!email.trim()) {
            setEmailError("Email cannot be empty")
            hasError = true;
        } else if (!isValidEmail(email)) {
            setEmailError("Please enter a valid email address");
            hasError = true;
        }else {
            setEmailError("")
        }

        if (preferences.length === 0) {
            setPreferencesError("Please select at least one preference");
            hasError = true;
        } else {
            setPreferencesError("")
        }

        if (!hasError) {
            navigate(`/SubscribeCompleted/${name}`);
        }
    }

    return (
        <div >
            <BannerNav/>
            
            <form onSubmit={handleSubmit} className="subscribe-container">
                <div>
                <h2>Subscribe</h2>
                    <label>Name : </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                            setNameError("")
                        }}
                    />
                    <br />
                    {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
                </div>

                <div>
                    <label>Email address: </label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                            setEmailError("")
                        }}
                    />
                    <br />
                    {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                </div>

                <br/>
                <div>
                <div className="preferenceContainer">
                    <label className="preferenceLabel">Select your preferences  : </label>
                    <br/>
                    
                    <label>
                    <input
                        type="checkbox"
                        value="Cakes"
                        checked={preferences.includes('Cakes')}
                        onChange={(event) => {
                            const { checked, value } = event.target;
                            if (checked) {
                                setPreferences([...preferences, value]);
                            } else {
                                setPreferences(preferences.filter((preferences) => preferences !== value));
                            }
                        }}
                    />
                    Cakes
                    </label> 
                    <br />

                    <label>
                    <input
                        type="checkbox"
                        value="Cookies"
                        checked={preferences.includes('Cookies')}
                        onChange={(event) => {
                            const { checked, value } = event.target;
                            if (checked) {
                                setPreferences([...preferences, value]);
                            } else {
                                setPreferences(preferences.filter((preferences) => preferences !== value));
                            }
                        }}
                    />
                    Cookies
                    </label> 
                    <br />

                    <label>
                    <input
                        type="checkbox"
                        value="Pastries"
                        checked={preferences.includes('Pastries')}
                        onChange={(event) => {
                            const { checked, value } = event.target;
                            if (checked) {
                                setPreferences([...preferences, value]);
                            } else {
                                setPreferences(preferences.filter((preferences) => preferences !== value));
                            }
                        }}
                    />
                    Pastries
                    </label> 
                    <br />
                    {preferencesError && <span style={{ color: 'red' }}>{preferencesError}</span>}
                </div>
                </div>
                

                <button type="submit">Submit</button>
            </form>
            <Footer/>
        </div>
    );
}

export default Subscribe;