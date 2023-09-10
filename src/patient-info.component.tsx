/**
 * Copyright 2023 - MagabeLab (Tanzania). All Rights Reserved.
 * Author Edwin Magabe
 */

import {
  TextInput,
  FormGroup,
  RadioButton,
  RadioButtonGroup,
  Tile,
} from "@carbon/react";

import { useTranslation } from "react-i18next";

interface PatientInfoProps {
  fistName: string;
  lastName: string;
  gender: "M" | "F";
}

export default function PatientInfo(props: PatientInfoProps) {
  const { t } = useTranslation();

  return (
    <Tile style={{ marginTop: "8px" }}>
      <FormGroup
        style={{
          maxWidth: "400px",
        }}
        legendText={t("patientInfo", "TAARIFA ZA MGOJWA:-")}
      >
        <TextInput
          id="FistLast"
          style={{
            marginTop: "8px",
          }}
          labelText={t("firstName", "Jina La Kwamza")}
          value={props.fistName}
        />
        <TextInput
          id="LastName"
          labelText={t("lastName", "Jina La Ukoo")}
          value={props.lastName}
        />
        <RadioButtonGroup
          legendText={t("gender", "Jinsia")}
          name="gender"
          defaultSelected={props.gender}
        >
          <RadioButton
            labelText={t("male", "Mwanamume")}
            value="M"
            id="M"
            disabled={props.gender !== "M"}
          />
          <RadioButton
            labelText={t("female", "Mwanamke")}
            value="F"
            id="F"
            disabled={props.gender !== "F"}
          />
        </RadioButtonGroup>
      </FormGroup>
    </Tile>
  );
}
