// ReportedCrimesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CrimeTable from './CrimeTable';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const ReportedCrimes = () => {
  const [crimes, setCrimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [crimesPerPage] = useState(10);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  const onCrimeResolve = async (crimeId) => {
    setCrimes((prevCrimes) => {
      return prevCrimes.map((crime) => {
        if (crime.id === crimeId) {
          return { ...crime, status: 'Resolved' };
        }
        return crime;
      });
    });
  }

  const onCrimeDelete = async (crimeId) => {
    setCrimes((prevCrimes) => {
          return prevCrimes.filter((crime) => crime.id !== crimeId);
        });
  }

  // Fetch crime data from the API
  const fetchCrimeData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/v1/report/0');
      setCrimes(response.data.data);
    } catch (error) {
      console.error('Error fetching crime data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrimeData();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    // Add filtering logic here to filter crimes based on the search keyword.
  };

  // Get current crimes for the current page
  const indexOfLastCrime = currentPage * crimesPerPage;
  const indexOfFirstCrime = indexOfLastCrime - crimesPerPage;
  const filteredCrimes = crimes.filter((crime) =>
    crime.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  const currentCrimes = filteredCrimes.slice(indexOfFirstCrime, indexOfLastCrime);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4 h-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Reported Crimes</h2>
      <SearchBar value={searchKeyword} onChange={handleSearch} />
      {loading ? (
        <p className="text-blue-800 font-semibold">Loading crimes...</p>
      ) : (
        <CrimeTable crimes={currentCrimes} onCrimeDelete= {onCrimeDelete} onCrimeResolve= {onCrimeResolve} />
      )}
      <Pagination
        crimesPerPage={crimesPerPage}
        totalCrimes={filteredCrimes.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default ReportedCrimes;
