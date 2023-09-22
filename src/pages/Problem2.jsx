import { useEffect, useRef, useState } from "react";
import AllContact from "../components/AllContact";

const Problem2 = () => {
  const [contacts, setContacts] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const modalRef = useRef(null);

  const fetchData = async (link, reset) => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setNextPageUrl(data.next);
        if (reset) {
          setContacts([...data.results]);
        } else {
          setContacts((prev) => [...prev, ...data.results]);
        }
      });
  };

  const handleContact = async () => {
    await fetchData(
      "https://contact.mediusware.com/api/contacts/?format=json",
      true
    );
  };
  const handleUSContact = async () => {
    await fetchData(
      "https://contact.mediusware.com/api/country-contacts/United%20States/?format=json",
      true
    );
  };
  const handleScroll = async () => {
    try {
      const modal = modalRef.current;
      if (modal) {
        const scrollPosition = modal.scrollTop + modal.clientHeight;
        const totalHeight = modal.scrollHeight;
        if (scrollPosition >= totalHeight) {
          await fetchData(nextPageUrl, false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const modal = modalRef.current;
    modal.addEventListener("scroll", handleScroll);
    return () => {
      modal.removeEventListener("scroll", handleScroll);
    };
  }, [contacts]);

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

          <button
            onClick={handleUSContact}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
          <AllContact
            handleContact={handleContact}
            handleUSContact={handleUSContact}
            contacts={contacts}
            modalRef={modalRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Problem2;
