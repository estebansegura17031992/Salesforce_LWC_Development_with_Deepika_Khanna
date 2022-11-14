# Notes in the course Salesforce Lightning Web Component Development with Deepika Khanna

## SFDX commands structure

namespace:topic:command

## Interesting commands found:

### Create a project

`sfdx force:project:create -n ProjectName`

### Auth org

`sfdx force:auth:web:login -a localAliasOrg -d`

### Create Scratch

`sfdx force:org:create -a localAliasOrg -d 30 -f configFileLocation`

### Set Default Org in local Project

`sfdx force:config:set defaultusername=selectedOrg`

### List SFDX commands

`sfdx commands`

### Create a class

`sfdx force:apex:class:create -n ClassName -d Path -t DefaultApexClass|ApexException|ApexUnitTest|InboundEmailService`

### Create Lightning Web Component

`sfdx force:lightning:component:create -n Name -d Path type aura|lwc`

### Push changes to Default org

`sfdx force:source:push`

### Open Default org

`sfdx force:org:open`

### Common Used for Udemy tutorial about LWC with Depkaah

- `sfdx force:lightning:component:create -n Name -d Path -type aura|lwc`
- `sfdx force:source:push`
- `sfdx force:org:open`

## Lightning Web Component Structure

- .html
- .js
- .js-meta.xml

## Configuring Lightning Web Components

Set **_isExposed_** to true

- \<isExposed>true\</isExposed>

#### Set targets to use LWC in Lighning Record Page, Lightning Home Page or Lightning App Page

```XML
<targets>
    <target>lightning__RecordPage</target>
    <target>lightning__HomePage</target>
    <target>lightning__AppPage</target>
</targets>
```

#### Decorator

- `@track`: makes the property reactive so whenever the value of the property changes, it will render the component
- Important note: Salesforce track properties without @track decorator
- `@api` makes the property public and reactive
- `@wire`

#### Rendering Components Conditionally in LWC

- if:true
- if:false

#### Rendering List of items in LWC

- for:each={colection} for:item "item"
- iterator:it={colection}

## Lightning Web Components Communication

- Communication using Method in LWC (Parent to Child)
- Custom Event Communication in LWC (Child to Parent)
- Publish Suscriber model in LWC (two components wich doesn't have a direct relation)

## Working with records inside LWC

### Lightning Data Service

### Base Component

- lightning-record-view-form
- lightning-record-edit-form
- lightning-record-form

### Fetch records via Apex
