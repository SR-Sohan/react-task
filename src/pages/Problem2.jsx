import { useEffect, useState } from "react";
import AllContact from "../components/AllContact";

const Problem2 = () => {
  const [contacts, setContacts] = useState({});
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [loading,setLoading]  = useState(false)

  const handleContact = () => {
    fetch("https://contact.mediusware.com/api/contacts/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data)
        setNextPageUrl(data.next)
      });
  };
  const handleUSContact = () => {
    fetch(
      "https://contact.mediusware.com/api/country-contacts/United%20States/?format=json"
    )
      .then((res) => res.json())
      .then((data) => {
        setContacts(data)
        setNextPageUrl(data.next)
      });
  };

//   const fetchContacts = (url) => {
//     setLoading(true);

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setContacts(data);
//         setNextPageUrl(data.next);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching contacts:', error);
//         setLoading(false);
//       });
//   };
//   const handleModalScroll = () => {
//     const modalElement = document.getElementById("exampleModal");

//     if (modalElement) {
//       const modalContent = modalElement.querySelector(".modal-content");
//       const scrollTop = modalContent.scrollTop;
//       const scrollHeight = modalContent.scrollHeight;
//       const clientHeight = modalContent.clientHeight;


//       const threshold = 100;

//       if (scrollHeight - scrollTop - clientHeight < threshold) {

//         if (nextPageUrl) {
//           fetchContacts(nextPageUrl);
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     // Add a scroll event listener for the modal
//     const modalElement = document.getElementById("exampleModal");

//     if (modalElement) {
//       modalElement.addEventListener("scroll", handleModalScroll);
//     }

//     // Fetch the initial page of contacts when the component mounts
//     fetchContacts("https://contact.mediusware.com/api/contacts/?format=json&page=1");

//     // Clean up the event listener when the component unmounts
//     return () => {
//       if (modalElement) {
//         modalElement.removeEventListener("scroll", handleModalScroll);
//       }
//     };
//   }, [nextPageUrl]);


  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleContact}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <AllContact
            handleContact={handleContact}
            handleUSContact={handleUSContact}
            contacts={contacts}
          />
          <button
            onClick={handleUSContact}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
