import { registerUnbound } from 'discourse-common/lib/helpers';
import { geoLocationFormat, locationFormat } from '../lib/location-utilities';

registerUnbound('geo-location-format', function(geoLocation, params) {
  return new Handlebars.SafeString(geoLocationFormat(geoLocation, params));
});

registerUnbound('location-format', function(location) {
  return new Handlebars.SafeString(locationFormat(location));
});
