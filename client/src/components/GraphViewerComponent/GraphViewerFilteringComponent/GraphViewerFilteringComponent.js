import React from "react";
import { withTranslation } from "react-i18next";

import {
  IconButton,
  Stack,
  Pivot,
  PivotItem
} from "office-ui-fabric-react";
import GraphViewerTermManagementComponent from "../GraphViewerTermManagementComponent/GraphViewerTermManagementComponent";

const GraphViewerFilteringComponent = ({
  toggleFilter,
  onZoomIn,
  onZoomOut,
  onZoomToFit,
  onCenter,
  onAddFilteringTerm,
  onRemoveFilteringTerm,
  onAddHighlightingTerm,
  onRemoveHighlightingTerm,
  onUpdateFilteringTerm,
  onUpdateHighlightingTerm,
  highlightingTerms,
  filteringTerms,
  onSwitchFilters,
  t
}) => (
  <>
    <div className="gc-controls">
      <Stack horizontal={false}>
        <div className="controls_buttonGroup">
          <IconButton
            iconProps={{ iconName: "Add" }}
            title={t("graphViewerFilteringComponent.zoomIn")}
            ariaLabel={t("graphViewerFilteringComponent.zoomIn")}
            onClick={onZoomIn}
            className="control-loadButtons" />
          <IconButton
            iconProps={{ iconName: "CalculatorSubtract" }}
            title={t("graphViewerFilteringComponent.zoomOut")}
            ariaLabel={t("graphViewerFilteringComponent.zoomOut")}
            onClick={onZoomOut}
            className="control-loadButtons" />
        </div>
        <div className="controls_singleButton">
          <IconButton
            iconProps={{ iconName: "FitPage" }}
            title={t("graphViewerFilteringComponent.center")}
            ariaLabel={t("graphViewerFilteringComponent.center")}
            onClick={onCenter}
            className="control-loadButtons" />
        </div>
        <div className="controls_singleButton">
          <IconButton
            iconProps={{ iconName: "ZoomToFit" }}
            title={t("graphViewerFilteringComponent.zoomToFit")}
            ariaLabel={t("graphViewerFilteringComponent.zoomToFit")}
            onClick={onZoomToFit}
            className="control-loadButtons" />
        </div>
        <div className="controls_singleButton filter_button">
          <IconButton
            iconProps={{ iconName: "Filter" }}
            title={t("graphViewerFilteringComponent.filter")}
            ariaLabel={t("graphViewerFilteringComponent.filter")}
            className="control-loadButtons"
            onClick={toggleFilter} />
        </div>
      </Stack>
    </div>
    <div className="gc-filter-contents">
      <div>
        <Pivot onLinkClick={onSwitchFilters}>
          <PivotItem headerText={t("graphViewerFilteringComponent.header1")} key="filter">
            <GraphViewerTermManagementComponent
              onAddFilteringTerm={onAddFilteringTerm}
              onRemoveFilteringTerm={onRemoveFilteringTerm}
              onUpdateTerm={onUpdateFilteringTerm}
              terms={filteringTerms} />
          </PivotItem>
          <PivotItem headerText={t("graphViewerFilteringComponent.header2")} key="highlight">
            <GraphViewerTermManagementComponent
              onAddFilteringTerm={onAddHighlightingTerm}
              onRemoveFilteringTerm={onRemoveHighlightingTerm}
              onUpdateTerm={onUpdateHighlightingTerm}
              terms={highlightingTerms} />
          </PivotItem>
        </Pivot>
      </div>
    </div>
  </>
);


export default withTranslation()(GraphViewerFilteringComponent);
