import React from 'react';
import StyledButton from './styled';

const INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
  {label: 'Color', style: 'color'}
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  // debugger
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyledButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          pickColor={props.pickColor}
        />
      )}
    </div>
  );
};
export default InlineStyleControls;