import React from 'react';
import FancyBorder from './FancyBorder';
import './CharacterForm.css';

const RC = React.Component;

// a "controlled" form
class CharacterForm extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            name: "Character Name",
            level: "Level",
            background: "Background",
            playerName: "Player Name",
            alignment: "Alignment",
            experience: "XP",
            race: "",
            characterClass: "",
            positiveFeedback: "",
            negativeFeedback: "",
        }
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify(this.state),
        }
        console.log('fetch options: ', fetchOptions);
        //fetch('/api')
    }

    fieldChange = (event) =>
    {
        event.preventDefault();
        const format = event.target.getAttribute('format');
        console.log('expected format: ', format);


        switch(format)
        {
            case 'number':
                if (Number.isNaN(parseInt(event.target.value)))
                {
                    console.log('this will not work...');
                    this.reportNeg("It must be a number!")
                    return;
                }
                break;
            case 'xp':
                if (Number.isNaN(parseInt(event.target.value)))
                {
                    console.log('this will not work...');
                    this.reportNeg("It must be a number!")
                    return;
                }
                if (parseInt(event.target.value) > 20000 || parseInt(event.target.value) < 0)
                {
                    this.reportNeg("Must be between 0 and 20000");
                    return;
                }
                break;

            case 'date': 
                break;
            default:
                break;
        }
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState, this.reportPos("Well done!"));
    }

    reportPos = (msg) =>
    {
        this.setState({
            positiveFeedback: msg,
            negativeFeedback: "",
        });
    }

    reportNeg = (msg) =>
    {
        this.setState({
            positiveFeedback: "",
            negativeFeedback: msg,
        });
    }
    
    render()
    {
        return (
            <FancyBorder color={this.props.color}>
                <form className="characterForm" onSubmit={this.handleSubmit}>
                    <input format='string' name='name' type='text' value={this.state.name} onChange={this.fieldChange} />
                    <input format='number' name='level' type='text' value={this.state.level} onChange={this.fieldChange} />
                    <input name='background' type='text' value={this.state.background} onChange={this.fieldChange} />
                    <input name='playerName' type='text' value={this.state.playerName} onChange={this.fieldChange} />
                    <input name='alignment' type='text' value={this.state.alignment} onChange={this.fieldChange} />
                    <input format="xp" name='experience' type='text' value={this.state.experience} onChange={this.fieldChange} />
                    <select name="race" onChange={this.fieldChange}>
                        <option>Choose a race...</option>
                    </select>
                    <select name="characterClass" onChange={this.fieldChange}>
                        <option>Choose a character class...</option>
                    </select>
                    <input type="submit" value="Submit Character" />
                    <div className="positiveFeedback">{this.state.positiveFeedback}</div>
                    <div className="negativeFeedback">{this.state.negativeFeedback}</div>
                </form>
            </FancyBorder>
        )
    }
}

export default CharacterForm;
