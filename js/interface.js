Fliplet.Widget.generateInterface({
  title: 'slide',
  fields: [
    { name: 'Name', type: 'text', label: 'Name', default: 'MySlide' },
    {
      name: 'requiredForm',
      type: 'radio',
      label: 'Is there a required form on this slide?',
      options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }],
      default: false,
      change: function (value) {
        Fliplet.Helper.field('requiredFormForwardNavigation').toggle(value);
        Fliplet.Helper.field('requiredFormBackwardNavigation').toggle(value);
      }
    },
    {
      name: 'requiredFormForwardNavigation',
      type: 'radio',
      label: 'Prevent users from moving to the next slide?',
      options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }],
      default: false,
      ready: function (el) {
        Fliplet.Helper.field('requiredFormForwardNavigation').toggle(
          Fliplet.Helper.field('requiredForm').get()
        );
      }
    },
    {
      name: 'requiredFormBackwardNavigation',
      type: 'radio',
      label: 'Prevent users from moving to the previous slide?',
      options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }],
      default: false,
      ready: function (el) {
        Fliplet.Helper.field('requiredFormBackwardNavigation').toggle(
          Fliplet.Helper.field('requiredForm').get()
        );
      }
    }
  ]
});