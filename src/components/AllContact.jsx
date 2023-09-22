const AllContact = ({contacts,handleContact,handleUSContact,modalRef}) => {

   let contactItems = null;
   if (contacts) {
     contactItems = contacts.map((item) => (
      <div className="col-lg-6" key={item.id}> {/* Don't forget to add a unique key */}
        <div className="single-item bg-success p-2 rounded text-center">
          <h3>{item.country ? item.country.name : 'Unknown'}</h3>
          <p>Phone: {item.phone}</p> {/* You can access item properties here */}
        </div>
      </div>
    ));
   }
  return (
    <div
    ref={modalRef}
      className="modal fade"
      id="exampleModal"
      
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  w-100">
        <div className="modal-content w-100">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
            All Contacts
            </h1>
           
            <button
            style={{backgroundColor: "#46139f"}}
              type="button"
              className="btn text-white"
              onClick={handleContact}
            >
              All Contacts
            </button>
            <button
               style={{backgroundColor: "#ff7f50"}}
              type="button"
              className="btn btn-secondary"
              onClick={handleUSContact}
            >
              US Contacts
            </button>
            <button
            style={{backgroundColor: "#46139f"}}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
          <div className="modal-body">
            <div className="row g-2">
            {contactItems}
            </div>
          </div>
          <div className="modal-footer">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContact;
