/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="markdown-landing-page.eu.auth0.com"
    auth0_client_id="Y1HjzCCRnnhkXpkhBCk6cxf31ikrPUt4"
  >
    {element}
  </AuthProvider>
)
