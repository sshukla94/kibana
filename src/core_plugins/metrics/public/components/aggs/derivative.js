import React, { Component, PropTypes } from 'react';
import AggSelect from './agg_select';
import MetricSelect from './metric_select';
import AggRow from './agg_row';
import createChangeHandler from '../lib/create_change_handler';
import createSelectHandler from '../lib/create_select_handler';
import createTextHandler from '../lib/create_text_handler';

class DerivativeAgg extends Component {

  render() {
    const { siblings, panel } = this.props;

    const defaults = { unit: '' };
    const model = { ...defaults, ...this.props.model };

    const handleChange = createChangeHandler(this.props.onChange, model);
    const handleSelectChange = createSelectHandler(handleChange);
    const handleTextChange = createTextHandler(handleChange);

    return (
      <AggRow
        disableDelete={this.props.disableDelete}
        model={this.props.model}
        onAdd={this.props.onAdd}
        onDelete={this.props.onDelete}
        siblings={this.props.siblings}>
        <div className="vis_editor__row_item">
          <div className="vis_editor__label">Aggregation</div>
          <AggSelect
            siblings={this.props.siblings}
            panelType={panel.type}
            value={model.type}
            onChange={handleSelectChange('type')}/>
        </div>
        <div className="vis_editor__row_item">
          <div className="vis_editor__label">Metric</div>
          <MetricSelect
            onChange={handleSelectChange('field')}
            metrics={siblings}
            metric={model}
            value={model.field}/>
        </div>
        <div>
          <div className="vis_editor__label">Units (1s, 1m, etc)</div>
          <input
            className="vis_editor__input"
            onChange={handleTextChange('unit')}
            value={model.unit}
            type="text"/>
        </div>
      </AggRow>
    );
  }

}

DerivativeAgg.propTypes = {
  disableDelete: PropTypes.bool,
  fields: PropTypes.object,
  model: PropTypes.object,
  onAdd: PropTypes.func,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  panel: PropTypes.object,
  series: PropTypes.object,
  siblings: PropTypes.array,
};

export default DerivativeAgg;
