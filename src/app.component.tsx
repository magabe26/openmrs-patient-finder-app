/**
 * Copyright 2023 - MagabeLab (Tanzania). All Rights Reserved.
 * Author Edwin Magabe
 */

import React, { useState } from "react";
import { InlineLoading } from "@carbon/react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { fhirBaseUrl, openmrsFetch } from "@openmrs/esm-framework";
import Search from "./search.component";
import PatientInfo from "./patient-info.component";

import styles from "./app.scss";

interface PatientSearchResult {
  patient: fhir.Patient | null;
  error: Error | null;
  isLoading: boolean;
}

function usePatient(query: string): PatientSearchResult {
  const url = `${fhirBaseUrl}/Patient?name=${query}&_summary=data`;
  const { data, error, isLoading } = useSWR<
    {
      data: { entry: Array<{ resource: fhir.Patient }> };
    },
    Error
  >(query ? url : null, openmrsFetch);

  return {
    patient: data ? data?.data?.entry[0].resource : null,
    error: error,
    isLoading,
  };
}

const App: React.FC = () => {
  const [patientName, setPatientName] = useState(null);
  const { patient, isLoading } = usePatient(patientName);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Search
        inputLabel={t("findPatient", "Tafuta Mgonjwa")}
        buttonText={t("find", "Tafuta")}
        onSearch={(value) => setPatientName(value)}
      />

      {isLoading ? (
        <InlineLoading
          description={t("loading", "Inatafuta") + "..."}
          role="progressbar"
        />
      ) : null}

      {patient ? (
        <PatientInfo
          fistName={patient.name[0].given[0]}
          lastName={patient.name[0].family}
          gender={(patient.gender === "female" ? "F" : "M") as "F" | "M"}
        /> //Its just a demo module
      ) : null}
    </div>
  );
};

export default App;
