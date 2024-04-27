
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext([])

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [casts, setCasts] = useState([])
  const [directors, setDirectors] = useState([])
  const [movies, setMovies] = useState([])

  const [searchUserText, setSearchUserText] = useState("")
  const [searchDirectorText, setSearchDirectorText] = useState("")
  const [searchCastText, setSearchCastText] = useState("")

  const fetchUser = () => {
    axios.get("http://localhost:8081/v1/api/admin/users")
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchCast = () => {
    axios.get("http://localhost:8081/v1/api/admin/casts")
      .then((res) => {
        setCasts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchDirector = () => {
    axios.get("http://localhost:8081/v1/api/admin/studios")
      .then((res) => {
        setDirectors(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const fetchMovie = () => {
    axios.get("http://localhost:8081/v1/api/admin/films")
      .then((res) => {
        console.log("fetch film: ", res.data)
        setMovies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getGenreById = async (id)  => {
    try {
      const response = await axios.get(`http://localhost:8081/v1/api/admin/genres/${id}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  const getDirectorById = async (id)  => {
    try {
      const response = await axios.get(`http://localhost:8081/v1/api/admin/studios/${id}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  useEffect(() => {
    fetchUser()
    fetchCast()
    fetchDirector()
    fetchMovie()
  }, [])

  return (
    <UserContext.Provider value={{
      users, setUsers,
      casts, setCasts,
      directors, setDirectors,
      movies, setMovies,
      searchUserText, setSearchUserText,
      searchDirectorText, setSearchDirectorText,
      searchCastText, setSearchCastText,
      fetchDirector, fetchCast, fetchMovie,
      getGenreById, getDirectorById
    }}>
      {children}
    </UserContext.Provider>
  );
};
