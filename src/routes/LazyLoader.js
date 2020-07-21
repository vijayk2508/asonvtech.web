/*
  Use this component to lazily load any other component
  Props:
    1. componentParent: oneOf(["containers", "components", "UIComponents", "common"])
    2. componentPath: String
    3. fallback: Component/HTML
*/
// import Home from '../pages/home'
// import Layout from '../components/_layout'

import React, { Suspense, lazy, memo } from 'react'
import { string, oneOfType, element, node, oneOf } from 'prop-types'
import Loader from '../components/_common/loader'

function lazyLoadComponent(componentParent, componentPath) {
  let Component;
  switch (componentParent) {
    case 'pages':
      Component = lazy(() => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(import(`../pages/${componentPath}`)), 2000)
        })
      })
      break
    case 'components':
      Component = lazy(() => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(import(`../components/${componentPath}`)), 2000)
        })
      })
      //Component = lazy(() => import(`../components/${componentPath}`))
      break
    // case "containers":
    //   Component = lazy(() => import(`../../containers/${componentPath}`));
    //   break;
    // case "common":
    //   Component = lazy(() => import(`../../common/${componentPath}`));
    //   break;
    // case "UIComponents":
    //   Component = lazy(() => import(`../../UIComponents/${componentPath}`));
    //   break;
    default:
      throw new Error(
        `Component Parents can be only one of ["containers", "components", "UIComponents", "common"] but you provided ${componentParent} instead.`,
      )
  }

  return Component
}

// Don't re-lazyload the component after it is already loaded
// Component reloads because fallback gives a new HTMLElement instance everytime
function arePropsEqual() {
  return true
}

function LazyLoader({
  componentPath,
  fallback,
  componentParent,
  ...restProps
}) {
  const ComponentToRender = lazyLoadComponent(componentParent, componentPath)
  return (
    <Suspense fallback={<>{fallback}</>}>
      <ComponentToRender {...restProps} />
    </Suspense>
  )
}

LazyLoader.defaultProps = {
  componentParent: 'pages',
  // fallback: <div className="full-page-loader">
  //   <div className="css-loader" />
  //   <h1>Loading...</h1></div>
  fallback: <Loader />,
}

LazyLoader.propTypes = {
  componentParent: oneOf([
    'containers',
    'components',
    'UIComponents',
    'common',
    'pages',
  ]),
  componentPath: string.isRequired,
  fallback: oneOfType([node, element]),
}

export default memo(LazyLoader, arePropsEqual)
