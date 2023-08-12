/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/alt-text */
import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import Header from '../Header'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {statesLists: [statesList]}

  componentDidMount() {
    this.getStates()
  }

  // eslint-disable-next-line react/sort-comp
  convertObjectsDataIntoListItemsUsingForInMethod = data => {
    const resultList = []
    // getting keys of an object object
    const keyNames = Object.keys(data)

    keyNames.forEach(keyName => {
      if (data[keyName]) {
        const {total} = data[keyName]
        // if the state's covid data is available we will store it or we will store 0
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = data[keyName].meta.population
          ? data[keyName].meta.population
          : 0
        console.log(keyName)
        resultList.push({
          stateCode: keyName,
          name: statesList.find(state => state.state_code === keyName)
            .state_name,
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
        })
      }
    })
    return resultList
  }

  getStates = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    const fetchedData = [data]
    console.log(fetchedData)

    const listFormattedDataUsingForInMethod = fetchedData.map(eachData =>
      this.convertObjectsDataIntoListItemsUsingForInMethod(eachData),
    )
    console.log(
      listFormattedDataUsingForInMethod[0],
      'First State Data Using ForIn Method',
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="Home-container">
          <div className="searchContainer">
            <AiOutlineSearch size={20} className="searchIcon" />
            <input
              type="search"
              className="searchInput"
              placeholder="Enter the State"
            />
          </div>
          <div className="headerContainer">
            <div className="confirm logoContainer">
              <h1 className="confirmText">Confirmed</h1>
              <img src="https://res.cloudinary.com/dpmzzclzw/image/upload/v1691585526/check-mark_1_iknfyd.png" />
              <p className="number">34285612</p>
            </div>
            <div className="active logoContainer">
              <h1 className="confirmText">Active</h1>
              <img src="https://res.cloudinary.com/dpmzzclzw/image/upload/v1691585963/protection_1_geawjh.png" />
              <p className="number">165803</p>
            </div>
            <div className="recovered logoContainer">
              <h1 className="confirmText">Recovered</h1>
              <img src="https://res.cloudinary.com/dpmzzclzw/image/upload/v1691586101/recovered_1_zxozlw.png" />
              <p className="number">33661339</p>
            </div>
            <div className="deceased logoContainer">
              <h1 className="confirmText">Deceased</h1>
              <img src="https://res.cloudinary.com/dpmzzclzw/image/upload/v1691586137/breathing_1_gh5cr2.png" />
              <p className="number">458470</p>
            </div>
          </div>
          <div className="tableContainer">
            <div className="tableHeaderContainer">
              <div className="stateContainer">
                <p className="headerText">States/UT</p>
                <FcGenericSortingAsc size={20} className="ascIcon" />
                <FcGenericSortingDesc size={20} className="ascIcon" />
              </div>
              <p className="headerText">Confirmed</p>
              <p className="headerText">Active</p>
              <p className="headerText">Recovered</p>
              <p className="headerText">Deceased</p>
              <p className="headerText">Population</p>
            </div>
            <hr className="line" />
          </div>
        </div>
      </>
    )
  }
}

export default Home
