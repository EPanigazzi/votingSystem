import React from "react";

class VoteCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                { name: "Java", votes: 0 },
                { name: "Phyton", votes: 0 },
                { name: "Javascript", votes: 0 },
                { name: "Dart", votes: 0 },
            ],
        };
    }

    vote(i) {
        let newLanguages = [...this.state.languages];
        newLanguages[i].votes++;

        this.setState({ languages: newLanguages });
    }

    render() {
        return (
            <div>
                <h1>Vote your language!</h1>
                {this.state.languages.map((lang, i) => (
                    <div key={i} className="language">
                        <div className="voteCount">{lang.votes}</div>
                        <div className="languageName">{lang.name}</div>
                        <button onClick={this.vote.bind(this, i)}>
                            Click Here
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}

export default VoteCheck;
