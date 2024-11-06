import { Badge } from "@/components/ui/badge";
import styles from "./job-listing.module.css";

const sanitizeYearsOfExp = (years_experience) => {
  if (!years_experience?.from || !years_experience?.to)
    return "No required experience";
  return `${years_experience?.from} to ${years_experience?.to}`;
};

const LanguageList = ({ languages }) => {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {languages.map((language, index) => (
          <li key={index}>
            {language.code === "es" && (
              <span role="img" aria-label="Spanish">
                🇪🇸
              </span>
            )}
            {language.code === "en" && (
              <span role="img" aria-label="English">
                🇬🇧
              </span>
            )}
            <span style={{ marginLeft: "8px" }}>{language.proficiency}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function JobListing({ job, disabled }) {
  return (
    <li className={styles.container}>
      <h2>{job.title}</h2>
      <p>
        <strong>Location:</strong>{" "}
        {job.locations?.length > 0 ? job.locations[0].address : "Not specified"}
      </p>
      <p>
        <strong>Work Mode:</strong> {job?.work_mode || "Not specified"}
      </p>
      <p>
        <strong>Contract Type:</strong> {job?.contract_type || "Not specified"}
      </p>
      {!disabled && (
        <div className={styles.box}>
          <Badge>Years {sanitizeYearsOfExp(job?.years_experience)}</Badge>
          <LanguageList languages={job?.languages || []} />
        </div>
      )}
    </li>
  );
}

export default JobListing;
