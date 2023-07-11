Deployed at: https://bit-final-report-manager.vercel.app/

# Report Manager

## Project Description

Report Manager is a React SPA designed for HR agencies that want to track the job application status of the candidates from their database.

The application consists of two parts: one visible to all users (Interviews Reports) and the other visible only to authorized ones (Reports Administration).

### Interviews Reports

This part of the application is read-only. Users have access to the list of rendered cards depicting candidates and are allowed to see more info on the candidate and his/her job applications in form of a list of reports. Each report includes information on the company the candidate applied to, the phase of the job recruiting process, whether the candidate has passed the stage, etc.

### Reports Administration

Upon successful authorization, the user is allowed not only to read, but also to delete from and create new reports in the database. For the purpose of creating new reports, an administration wizzard was implemented. A new report will be sent to the database only if certain conditions are fulfilled (e.g. the candidate has passed the previous stage of the process).

## How to Run the Project

This is primarily a front-end project. It is deployed via Netlify: [LINK]. Yet it also requires a back-end (a database) for all of the core functionalities to work properly. The server is deployed via: [LINK].

## Credits

Report Manager is a team project conducted during the final two weeks of the Belgrade Institute of Technology's Bootcamp in December 2022. The members of the team are:

Milos Broceta. GitHub: https://github.com/brocetta <br />
Stefan Ljusic. GitHub: https://github.com/stefanljusic10 <br />
Branko Markovic. GitHub: https://github.com/Branko9y <br />
Petar Srdanovic. Github: https://github.com/petarsrd
