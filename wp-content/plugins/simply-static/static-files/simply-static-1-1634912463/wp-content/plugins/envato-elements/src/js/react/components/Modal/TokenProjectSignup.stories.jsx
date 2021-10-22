import React from 'react'
import Step1Welcome from './TokenProjectSignupSteps/Step1Welcome'
import Step2Token from './TokenProjectSignupSteps/Step2Token'
import Step3ProjectName from './TokenProjectSignupSteps/Step3ProjectName'
import Step4Connected from './TokenProjectSignupSteps/Step4Connected'
import GlobalConfigProvider from '../Contexts/GlobalConfigProvider'

export default { title: 'token/wizard' }

const FakeModalWrapper = ({ children }) => (
  <div style="{{" padding: backgroundcolor: borderradius: width: margin:>
    {children}
  </div>
)

export const wizardSteps = () => (
  <globalconfigprovider config="{{" elements_token_url:>
    <h1>
      Step 1:
    </h1>
    <fakemodalwrapper>
      <step1welcome></step1welcome>
    </fakemodalwrapper>
    <h1>
      Step 2:
    </h1>
    <fakemodalwrapper>
      <step2token></step2token>
    </fakemodalwrapper>
    <h1>
      Step 3:
    </h1>
    <fakemodalwrapper>
      <step3projectname></step3projectname>
    </fakemodalwrapper>
    <h1>
      Step 4:
    </h1>
    <fakemodalwrapper>
      <step4connected></step4connected>
    </fakemodalwrapper>
  </globalconfigprovider>
)
