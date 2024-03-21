import { useState } from "react"

const Subscribe = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [preferences, setPreferences] = useState([])

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [preferencesError, setPreferencesError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name.trim()) {
            setNameError("")
        } else {
            setNameError("Name cannot be empty")
        }

        if (email.trim()) {
            setEmailError("")
        } else {
            setEmailError("Email cannot be empty")
        }

        if (preferences.length === 0) {
            setPreferencesError("Please select at least one preference");
        } else {
            setPreferencesError("")
        }
    }

    return (
        <div>
            <h2>Subscribe</h2>
            <form onSubmit={handleSubmit}>
                <div>
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

                <div>
                    <label>Select your preferences  : </label>
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

                    {preferencesError && <span style={{ color: 'red' }}>{preferencesError}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Subscribe