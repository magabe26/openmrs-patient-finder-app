# OpenMRS Patient Finder App
![alt screenshot](https://raw.githubusercontent.com/magabe26/openmrs-patient-finder-app/main/screenshoot01.bmp)
A microfrontend module that fetches a particular patient data from an OpenMRS server and
display that information to the user.

## Running this code

```

yarn  # to install dependencies
yarn start --backend "http://localhost:8080/" --port 8081 # will run against a local OpenMRS server at localhost:8080, serving the frontend from 8081

```

Once it is running, a browser window
should open with the OpenMRS 3 application. Log in and then navigate to `/openmrs/spa/patient-finder`.
