## Check packages.json scripts section
```bash
 cd frontend
```
### Install the dependencies
```bash
npm run install
```
### Generate/stub/install flow-typed typings
```bash
npm run typed
```
### Next run in development mode
```bash
npm run dev
```
### Next build
```bash
npm run build
```
## Run flow to validate your code
```bash
npm run flow
```
### Next run in prod
```bash
npm run start
```
### If the flow is complaining about "import someType from 'something'" you can generate a stub for the 'something'
```bash
flow-typed create-stub something
```
#### For example:
```bash
flow-typed create-stub @material-ui/core/DialogTitle@3.9.2 --overwrite
```