import React, { Component } from "react";
import Header from "./AppHeader";
import Places from "./Places";
import Form from "./AppForm";
import "./App.css";

const data = [
  {
    placeName: "Andhra Pradesh",
    hotels: [
      "Taj Hotel",
      "Novetel",
      "Budhil Park",
      "RR Grand",
      "Banjara Hotel",
    ],
    temple: [
      "Tirupathi",
      "Simhachalam",
      "Siva Mallikarjuna Temple",
      "Veerabadra Temple",
      "Sri KankaLakhmi Temple",
    ],
    parks: [
      "Nehru Zoo Logical Park",
      "Papikonda National Park",
      "Sri Venkatewara Park",
      "Rajiv Gandhi Park",
      "Indira Gandhi Park",
    ],
  },
  {},
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {
        name: "hotels",
        temple: "temples",
        park: "parks",
      },
    };
  }

  render() {
    return (
      <div id="root">
        <Header />
        <Form />
        <Places />
      </div>
    );
  }
}
export default App;
