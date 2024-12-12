import { expect, test, describe } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { Button } from './button';
import { DEFAULT_BUTTON_PROPS } from './constants';
import './button';

describe('Button Component', () => {
  test('renders with default properties', async () => {
    const el = await fixture<Button>(html`<ui-button>Click me</ui-button>`);
    
    expect(el.variant).to.equal(DEFAULT_BUTTON_PROPS.variant);
    expect(el.size).to.equal(DEFAULT_BUTTON_PROPS.size);
    expect(el.disabled).to.equal(DEFAULT_BUTTON_PROPS.disabled);
  });

  test('emits ui-click event when clicked', async () => {
    const el = await fixture<Button>(html`<ui-button>Click me</ui-button>`);
    let clicked = false;
    
    el.addEventListener('ui-click', () => clicked = true);
    el.click();
    
    expect(clicked).to.be.true;
  });

  test('does not emit ui-click when disabled', async () => {
    const el = await fixture<Button>(html`<ui-button disabled>Click me</ui-button>`);
    let clicked = false;
    
    el.addEventListener('ui-click', () => clicked = true);
    el.click();
    
    expect(clicked).to.be.false;
  });

  test('applies correct classes based on props', async () => {
    const el = await fixture<Button>(
      html`<ui-button variant="secondary" size="large">Click me</ui-button>`
    );
    
    const button = el.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('ui-button--secondary')).to.be.true;
    expect(button?.classList.contains('ui-button--large')).to.be.true;
  });
});