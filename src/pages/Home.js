import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Coulmns from "react-columns";
import Form from "react-bootstrap/Form";
import RingLoader from "react-spinners/RingLoader";
import Toggle from 'react-toggle';
import "react-toggle/style.css";


function Home() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);


  useEffect(() => {
    axios
    .all([
      axios.get("https://corona.lmao.ninja/v2/all"),
      axios.get("https://corona.lmao.ninja/v2/countries?sort=country")
    ])
      .then(responseArr => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
    }, []);

    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();

    const filterCountries = results.filter(item => {
      return searchCountries !== ""? item.country.includes(searchCountries) : item;
    });

    const countries = filterCountries.map((data,i) => {
      return (
        <Card
        key={i}
        bg= "light"
        text= "dark"
        class-name= "text-center"
        style={{margin: "10px"}}
      >
      <Card.Img varient="top" src={data.countryInfo.flag}/>
      <Card.Body>
      <Card.Title>{data.country}</Card.Title>
      <Card.Text>Cases {data.cases}</Card.Text>
      <Card.Text>Deaths {data.deaths}</Card.Text>
      <Card.Text>Recovered {data.recovered}</Card.Text>
      <Card.Text>Today's cases {data.todayCase}</Card.Text>
      <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
      <Card.Text>Active {data.active}</Card.Text>
      <Card.Text>Critical {data.critical}</Card.Text>
      </Card.Body>
      </Card>
      );
    });

    var queries = [{
      columns: 2,
      query: 'min-width: 500px'
    }, {
      columns: 3,
      query: 'min-width: 1000px'
    }];

    const handleDarkThemeChange = () => {
      setDarkTheme(!darkTheme)
    }

  return(
    <div style={{ backgroundColor: darkTheme ? "black": "white", color: darkTheme ? "white": "black"}}>
      <br />
      <div style={{display: "flex", justifyContent:"center"}}>
      <RingLoader
          size={50}
          color={"green"}
          loading={loading}
        />
        </div>
        <br />
      <h2 style={{textAlign: "center"}}
      >
        Covid-19 Live Stats</h2>
        <br />
        <div style={{textAlign:"center"}}>
        <Toggle
    defaultChecked={false}
    icons={{
      checked:"🌜",
      unchecked: "🌞",
    }}
   onChange={handleDarkThemeChange}
    />
    </div>
    <br />
      <CardDeck>
    <Card bg='secondary' text= 'white' className='text-center' stylemargin={{margin: "10px"}}>
      <Card.Body>
        <Card.Title>Cases</Card.Title>
  <Card.Text>{latest.cases}</Card.Text>
      </Card.Body>
      <Card.Footer>
  <small>Last updated {lastUpdated}</small>
      </Card.Footer>
    </Card>
    <Card bg='danger' text={'white'} className='text-center' stylemargin={{margin: '10px'}}>
      <Card.Body>
        <Card.Title>Death</Card.Title>
  <Card.Text>{latest.deaths}</Card.Text>
      </Card.Body>
      <Card.Footer>
  <small>Last updated {lastUpdated}</small>
      </Card.Footer>
    </Card>
    <Card bg='success' text={'white'} className='text-center' stylemargin={{margin: '10px'}}>
      <Card.Body>
        <Card.Title>Recovered</Card.Title>
  <Card.Text>{latest.recovered}</Card.Text>
      </Card.Body>
      <Card.Footer>
  <small>Last updated {lastUpdated}</small>
      </Card.Footer>
    </Card>
  </CardDeck>
  <Form>
  <Form.Group controlId="formGroupSearch">
    <Form.Control type="text" placeholder="Search a country" 
    onChange={e => setSearchCountries(e.target.value)}
    />
  </Form.Group>
</Form>
  <Coulmns queries={queries}>
  {countries}
  </Coulmns>
  
  </div>
  );
}

export default Home;
