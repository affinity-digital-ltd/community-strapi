import type { Schema, Attribute } from '@strapi/strapi';

export interface GenericCtaLink extends Schema.Component {
  collectionName: 'components_generic_cta_links';
  info: {
    displayName: 'CTA Link';
    icon: 'cursor';
  };
  attributes: {
    Title: Attribute.String;
    URL: Attribute.String;
  };
}

export interface GenericFooter extends Schema.Component {
  collectionName: 'components_generic_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText;
    Links: Attribute.Component<'generic.cta-link', true>;
  };
}

export interface GenericFullWidthImage extends Schema.Component {
  collectionName: 'components_generic_full_width_images';
  info: {
    displayName: 'Full Width Image';
    icon: 'picture';
  };
  attributes: {
    Image: Attribute.Media;
  };
}

export interface GenericJumbotron extends Schema.Component {
  collectionName: 'components_generic_jumbotrons';
  info: {
    displayName: 'Jumbotron';
    icon: 'picture';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.Text;
    Background: Attribute.Media;
  };
}

export interface GenericPrimaryCallToAction extends Schema.Component {
  collectionName: 'components_generic_primary_call_to_actions';
  info: {
    displayName: 'Primary Call To Action';
    icon: 'link';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Subtitle: Attribute.Text;
    PageLink: Attribute.Component<'generic.cta-link'>;
  };
}

export interface GenericSecondaryCallToAction extends Schema.Component {
  collectionName: 'components_generic_secondary_call_to_actions';
  info: {
    displayName: 'Secondary Call To Action';
    icon: 'cursor';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText;
    Link: Attribute.Component<'generic.cta-link'>;
    Image: Attribute.Media;
  };
}

export interface GenericTriPanel extends Schema.Component {
  collectionName: 'components_generic_tri_panels';
  info: {
    displayName: 'Tri-Panel';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Link: Attribute.Component<'generic.cta-link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'generic.cta-link': GenericCtaLink;
      'generic.footer': GenericFooter;
      'generic.full-width-image': GenericFullWidthImage;
      'generic.jumbotron': GenericJumbotron;
      'generic.primary-call-to-action': GenericPrimaryCallToAction;
      'generic.secondary-call-to-action': GenericSecondaryCallToAction;
      'generic.tri-panel': GenericTriPanel;
    }
  }
}
