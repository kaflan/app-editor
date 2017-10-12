import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Editor, EditorState, RichUtils} from 'draft-js';
import InlineStyleControls from './InlineStyleControls';
import BlockStyleControls from './BlockStyleControls';
import { reduxForm } from 'redux-form';
import {Button, Input, Card} from 'antd';
import './Editor.css';

// @connect()
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

@reduxForm({form: 'editor'})

export default class CustomEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    editorState: EditorState.createEmpty(),
    color: '#000000'
  };

  onChange = (editorState) => {
    // debugger
    this.setState({editorState});
  };
  _onTab = (e) =>  {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  };

  _toggleBlockType = (blockType) => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  };

  _toggleInlineStyle = (inlineStyle) => {
    console.log(inlineStyle, '))0');
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  };

  focus = () => this.refs.editor.focus();

  pickColor ({key}) {
    const color  = key;
    this.setState({color});
  };

  render () {
    const {handleSubmit} = this.props;
    const {editorState} = this.state;
    let className = 'RichEditor-editor';
    let contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    // this.props.focus();
    return (
      <div className="container">
        <Card className="editor-form">
          <form onSubmit={handleSubmit}>
            <div
              className="row justify-content-center"
            >
              <Input type='text' className="col-sm-12" />
            </div>

            <div
              className="row justify-content-center RichEditor-root"
              style={{
                marginTop: '20px'
              }}
              onClick={this.focus}
            >
              <BlockStyleControls
                pickColor={(color ) => this.pickColor(color)}
                editorState={editorState}
                onToggle={this._toggleBlockType}
              />
              <InlineStyleControls
                pickColor={(color ) => this.pickColor(color)}
                editorState={editorState}
                onToggle={this._toggleInlineStyle}
              />
              <Editor
                className={className}
                editorState={editorState}
                onChange={this.onChange}
                customStyleMap={styleMap}
                onTab={this.onTab}
                ref="editor"
              />
            </div>
            <div className="row justify-content-center">
              <Button style={{
                marginTop: '22px',
                marginLeft: '69%'
              }}>
                Save post
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );
  }
  componentDidMount () {
    this.focus();
  }
}

