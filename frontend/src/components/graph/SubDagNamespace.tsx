import grey from '@material-ui/core/colors/grey';
import * as React from 'react';
import { classes, stylesheet } from 'typestyle';
import { color, commonCss, fonts, padding } from 'src/mlmd/Css';
import { color as commonColor } from 'src/Css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export interface SubDagNamespaceProps {
  namespaces: string[];
  setNamespaces(namespaces: string[]): void;
  // initialTarget?: Artifact;
  // setLineageViewTarget(artifact: Artifact): void;
}

interface History {
  namespace: string;
  path: string;
}
const baseLinkButton: React.CSSProperties = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'inline',
  margin: 0,
  padding: 0,
};
const baseBreadcrumb = {
  ...baseLinkButton,
  fontFamily: fonts.secondary,
  fontWeight: 500,
};
const actionBarCss = stylesheet({
  actionButton: {
    color: color.strong,
  },
  workspace: {
    ...baseBreadcrumb,
    fontStyle: 'italic',
  },
  workspaceSep: {
    display: 'block',
    color: '#3c3c3c',
    $nest: {
      '&::before': {
        content: '""',
        color: '#9f9f9f',
        margin: '0 .75em',
        border: '1px solid',
        background: 'currentColor',
      },
    },
  },
  breadcrumbContainer: {
    alignItems: 'center',
    display: 'flex',
    flexShrink: 1,
    overflow: 'hidden',
  },
  breadcrumbInactive: {
    color: color.grey,
    ...baseBreadcrumb,
    $nest: {
      '&:hover': {
        color: commonColor.linkLight,
        textDecoration: 'underline',
      },
    },
  },
  breadcrumbActive: {
    color: color.strong,
    ...baseBreadcrumb,
    $nest: {
      '&:hover': {
        cursor: 'default',
      },
    },
  },
  breadcrumbSeparator: {
    color: grey[400],
  },
  container: {
    borderBottom: '1px solid ' + color.separator,
    height: '48px',
    justifyContent: 'space-between',
  },
});
const BreadcrumbSeparator: React.FC = () => (
  <div className={classes(commonCss.flex)}>
    <ArrowRightAltIcon className={classes(actionBarCss.breadcrumbSeparator, padding(1, 'lr'))} />
  </div>
);

const SubDagNamespace: React.FC<SubDagNamespaceProps> = ({ namespaces, setNamespaces }) => {
  const historyList: History[] = [];
  let path = '';
  for (const namespace in namespaces) {
    historyList.push({ namespace: namespace, path: path });
    path += '/' + namespace;
  }

  const breadcrumbs: JSX.Element[] = [
    <span className={classes(actionBarCss.workspace)} key='workspace'>
      {'Layers'}
    </span>,
    <aside key='workspace-sep' className={actionBarCss.workspaceSep} />,
  ];

  namespaces.forEach((n, index) => {
    const isActive = index === namespaces.length - 1;
    const onBreadcrumbClicked = () => {
      setNamespaces(namespaces.slice(0, index + 1));
    };

    breadcrumbs.push(
      <button
        key={`breadcrumb-${index}`}
        className={classes(
          isActive ? actionBarCss.breadcrumbActive : actionBarCss.breadcrumbInactive,
        )}
        disabled={isActive}
        onClick={onBreadcrumbClicked}
      >
        {n}
      </button>,
    );
    if (!isActive) {
      breadcrumbs.push(<BreadcrumbSeparator key={`separator-${index}`} />);
    }
  });

  return (
    <div className={classes(actionBarCss.container, padding(25, 'lr'), commonCss.flex)}>
      <div className={classes(actionBarCss.breadcrumbContainer)}>{breadcrumbs}</div>
    </div>
  );
};
export default SubDagNamespace;
