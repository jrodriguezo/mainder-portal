import { useEffect, useState } from "react";
import getAgencies from "../services/getAgencies";
import { getAgencyJobs } from "../services/getAgencyJobs";
import JobListing from "../components/ui/job-listing/job-listing";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
  },
};

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [indexJob, setIndexJob] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [, data] = await getAgencies();

        let jobOffers = [];

        for (const { slug } of data) {
          const [, agencyJobs] = await getAgencyJobs(slug);
          jobOffers = [...jobOffers, ...agencyJobs];
        }

        console.log(jobOffers);
        setJobs(jobOffers);
      } catch (error) {
        console.error("Error fetching agencies or jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <JobListing job={jobs[0]} disabled={true} />
      </Modal>
      <h1>
        Open job positions <span>available</span>
      </h1>
      {isLoading && (
        <p>Please be patience, we are loading the jobs available...</p>
      )}
      <ul>
        {jobs.map((job) => {
          return (
            <>
              <JobListing key={job.id} job={job} />
              <button onClick={openModal}>See more</button>
            </>
          );
        })}
      </ul>
    </section>
  );
}

export default Home;
