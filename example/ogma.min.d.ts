/**
 * Ogma
 * @description Graph visualization library
 * @version 4.1.0 (built on Thu Mar 03 2022 12:01:42 GMT+0100 (heure normale d’Europe centrale))
 * @author Linkurious SAS
 * @license (c) Linkurious 2022. All rights reserved.
 * @preserve
 */
/* eslint-disable */

// import { Map } from 'leaflet';
interface Map {}

interface NodeTextStyle {
  content?: TextContent;
  font?: string;
  color?: Color | 'inherit';
  size?: PixelSize;
  scale?: number;
  scaling?: boolean;
  style?: FontStyle;
  align?: TextAlign;
  margin?: PixelSize;
  padding?: PixelSize;
  maxLineLength?: number;
  backgroundColor?: Color | 'inherit' | null;
  minVisibleSize?: number;
  tip?: boolean;
  position?: TextPosition;
  secondary?: AttributeNestedValue<SecondaryNodeTextStyle, Node$1>;
}
declare type NodeTextStyleValue = AttributeNestedValue<NodeTextStyle, Node$1>;
interface SecondaryNodeTextStyle {
  content?: TextContent;
  font?: string;
  color?: Color | 'inherit';
  size?: PixelSize;
  scale?: number;
  style?: FontStyle;
  align?: TextAlign;
  margin?: PixelSize;
  padding?: PixelSize;
  backgroundColor?: Color | 'inherit' | null;
  minVisibleSize?: number;
}
interface EdgeTextStyle {
  content?: TextContent;
  font?: string;
  color?: Color;
  size?: PixelSize;
  scale?: number;
  scaling?: boolean;
  style?: FontStyle;
  align?: TextAlign;
  backgroundColor?: Color | 'inherit';
  margin?: PixelSize;
  padding?: PixelSize;
  minVisibleSize?: PixelSize;
  maxLineLength?: number;
  adjustAngle?: boolean;
  position?: EdgeTextPosition;
  secondary?: AttributeNestedValue<SecondaryEdgeTextStyle, Edge>;
}
interface SecondaryEdgeTextStyle {
  content?: TextContent;
  font?: string;
  color?: Color;
  size?: PixelSize;
  scale?: number;
  style?: FontStyle;
  align?: TextAlign;
  backgroundColor?: Color | 'inherit';
  margin?: PixelSize;
  padding?: PixelSize;
  minVisibleSize?: PixelSize;
}
declare type EdgeTextStyleValue = AttributeNestedValue<EdgeTextStyle, Edge>;

declare type BadgeImage =
  | null
  | string
  | {
      url?: string;
      scale?: number;
    };
/**
 * @public
 * @property {Color} [color="white"]                                           Fill color of the badge.
 * @property {number} [scale=0.45]                                             Size of the badge relative to the node.
 * @property {number} [positionScale=1]                                        Center of the badge relative to the node size (1 = at the node's border)
 * @property {number} [minVisibleSize=12]                                      If the node diameter on screen is less than this value, the badge will not be displayed
 * @property {object|null|string} [image]                                      If not an object, alias to `image.url`
 * @property {null|string} [image.url=null]                                    URL of the image to display in the badge
 * @property {number} [image.scale=1]                                          Size of the image relative to the badge diameter
 * @property {object} [stroke]
 * @property {Color|"inherit"} [stroke.color="black"]                          Color of the badge stroke
 * @property {PixelSize} [stroke.width=2]                                      Width of the badge stroke
 * @property {ScalingMethod} [stroke.scalingMethod="fixed"]                    Indicates if the badge width should be multiplied by the zoom when the node is displayed.
 * @property {object|TextContent} [text]                                       If not an object, alias for `text.content`
 * @property {TextContent} [text.content=null]                                 Text to display in the badge
 * @property {"inherit"|Color} [text.color="black"]                            Color of the badge text
 * @property {string} [text.font="Arial"]                                      Font to use for the badge text
 * @property {FontStyle} [text.style="normal"]                                   Style applied to the badge text
 * @property {number} [text.scale=0.5]                                         Size of the text relative to the badge diameter
 * @property {number} [text.paddingTop=0]                                      Vertical padding of the text inside the badge
 * @property {number} [text.paddingLeft=0]                                     Horizontal padding of the text inside the badge
 */
interface Badge {
  color?: Color | ((node: Node) => Color);
  scale?: number | ((node: Node) => number);
  positionScale?: number | ((node: Node) => number);
  minVisibleSize?: number | ((node: Node) => number);
  image?: BadgeImage | ((node: Node) => BadgeImage);
  stroke?: {
    color?: Color | 'inherit';
    width?: PixelSize;
    scalingMethod?: ScalingMethod;
  };
  text?:
    | {
        content: TextContent | ((node: Node) => TextContent);
        color?: Color | 'inherit' | ((node: Node) => Color);
        font?: string | ((node: Node) => string);
        style?: FontStyle | ((node: Node) => FontStyle);
        scale?: number | ((node: Node) => number);
        paddingTop?: number;
        paddingLeft?: number;
      }
    | TextContent;
}
/**
 * Used for additional type formats in the API
 */
declare type BadgeRequired = Required<
  Omit$1<Badge, 'stroke' | 'image' | 'text'>
> & {
  image: Required<Exclude<BadgeImage, string | null>>;
  stroke: {
    color: Color | 'inherit';
    width: PixelSize;
    scalingMethod: ScalingMethod;
  };
  text: {
    content?: TextContent;
    color: Color | 'inherit';
    font: string;
    style: FontStyle;
    scale: number;
  };
};

interface NodeBadgeType {
  minVisibleSize: number;
  scale: number;
  positionScale: number;
  color: Color;
  image: {
    url?: string;
    scale: number;
  };
  stroke: {
    color: Color;
    width: number;
    scalingMethod: ScalingMethod;
  };
  text: {
    content?: string;
    color: Color;
    font: string;
    style: FontStyle;
    scale: number;
    paddingLeft: number;
    paddingTop: number;
  };
}
/**
 * TODO: why this one is here rather than nodeAttributes?
 * TODO: shouldn't we infer this via a custom recursive Required<T> utility?
 * This is a subset of the doc types more strict
 */
interface NodeAttributeTypesTree {
  x: number;
  y: number;
  radius: number;
  scalingMethod: ScalingMethod;
  color: Color | Color[];
  opacity: number;
  shape: NodeShape;
  layer: number;
  detectable: boolean;
  draggable: boolean;
  layoutable: boolean;
  innerStroke: {
    width: number;
    minVisibleSize: number;
    scalingMethod: ScalingMethod;
    color: Color;
  };
  outerStroke: {
    width: number;
    minVisibleSize: number;
    scalingMethod: ScalingMethod;
    color: Color;
  };
  badges: {
    topLeft: NodeBadgeType;
    topRight: NodeBadgeType;
    bottomLeft: NodeBadgeType;
    bottomRight: NodeBadgeType;
  };
  halo: {
    color: Color;
    width: number;
    scalingMethod: ScalingMethod;
    strokeColor: Color;
    strokeWidth: number;
    hideNonAdjacentEdges: boolean;
  };
  pulse: {
    enabled: boolean;
    duration: number;
    interval: number;
    startColor: Color;
    endColor: Color;
    width: number;
    startRatio: number;
    endRatio: number;
  };
  icon: {
    content?: TextContent;
    font: string;
    color: Color;
    scale: number;
    style: FontStyle;
    minVisibleSize: number;
  };
  image: {
    url?: string;
    scale: number;
    fit: boolean;
    tile: boolean;
    minVisibleSize: number;
  };
  outline: {
    enabled: boolean;
    color: Color;
    minVisibleSize: number;
  };
  text: {
    content?: TextContent;
    font: string;
    color: Color;
    size: number;
    scale: number;
    style: FontStyle;
    align: TextAlign;
    margin: number;
    padding: number;
    backgroundColor: Color;
    tip: boolean;
    minVisibleSize: number;
    scaling: boolean;
    position: TextPosition;
    maxLineLength: number;
    truncateLength: number;
    secondary: {
      content?: string;
      font: string;
      color: Color;
      size: number;
      scale: number;
      style: FontStyle;
      align: TextAlign;
      margin: number;
      padding: number;
      backgroundColor: Color;
      minVisibleSize: number;
    };
  };
}

declare type NodeAttributeTupleTypes =
  | {
      key: ['x'];
      value: 'x';
    }
  | {
      key: ['y'];
      value: 'y';
    }
  | {
      key: ['radius'];
      value: 'radius';
    }
  | {
      key: ['scalingMethod'];
      value: 'scalingMethod';
    }
  | {
      key: ['color'];
      value: 'color';
    }
  | {
      key: ['opacity'];
      value: 'opacity';
    }
  | {
      key: ['shape'];
      value: 'shape';
    }
  | {
      key: ['layer'];
      value: 'layer';
    }
  | {
      key: ['detectable'];
      value: 'detectable';
    }
  | {
      key: ['draggable'];
      value: 'draggable';
    }
  | {
      key: ['layoutable'];
      value: 'layoutable';
    }
  | {
      key: ['innerStroke'];
      value: 'innerStroke';
    }
  | {
      key: ['innerStroke', 'width'];
      value: 'innerStroke.width';
    }
  | {
      key: ['innerStroke', 'scalingMethod'];
      value: 'innerStroke.scalingMethod';
    }
  | {
      key: ['innerStroke', 'color'];
      value: 'innerStroke.color';
    }
  | {
      key: ['innerStroke', 'minVisibleSize'];
      value: 'innerStroke.minVisibleSize';
    }
  | {
      key: ['outerStroke'];
      value: 'outerStroke';
    }
  | {
      key: ['outerStroke', 'width'];
      value: 'outerStroke.width';
    }
  | {
      key: ['outerStroke', 'scalingMethod'];
      value: 'outerStroke.scalingMethod';
    }
  | {
      key: ['outerStroke', 'color'];
      value: 'outerStroke.color';
    }
  | {
      key: ['outerStroke', 'minVisibleSize'];
      value: 'outerStroke.minVisibleSize';
    }
  | {
      key: ['badges'];
      value: 'badges';
    }
  | {
      key: ['badges', 'topLeft'];
      value: 'badges.topLeft';
    }
  | {
      key: ['badges', 'topLeft', 'color'];
      value: 'badges.topLeft.color';
    }
  | {
      key: ['badges', 'topLeft', 'scale'];
      value: 'badges.topLeft.scale';
    }
  | {
      key: ['badges', 'topLeft', 'minVisibleSize'];
      value: 'badges.topLeft.minVisibleSize';
    }
  | {
      key: ['badges', 'topLeft', 'positionScale'];
      value: 'badges.topLeft.positionScale';
    }
  | {
      key: ['badges', 'topLeft', 'image'];
      value: 'badges.topLeft.image';
    }
  | {
      key: ['badges', 'topLeft', 'image', 'url'];
      value: 'badges.topLeft.image.url';
    }
  | {
      key: ['badges', 'topLeft', 'image', 'scale'];
      value: 'badges.topLeft.image.scale';
    }
  | {
      key: ['badges', 'topLeft', 'stroke', 'color'];
      value: 'badges.topLeft.stroke.color';
    }
  | {
      key: ['badges', 'topLeft', 'stroke', 'scalingMethod'];
      value: 'badges.topLeft.stroke.scalingMethod';
    }
  | {
      key: ['badges', 'topLeft', 'stroke', 'width'];
      value: 'badges.topLeft.stroke.width';
    }
  | {
      key: ['badges', 'topLeft', 'text'];
      value: 'badges.topLeft.text';
    }
  | {
      key: ['badges', 'topLeft', 'text', 'content'];
      value: 'badges.topLeft.text.content';
    }
  | {
      key: ['badges', 'topLeft', 'text', 'color'];
      value: 'badges.topLeft.text.color';
    }
  | {
      key: ['badges', 'topLeft', 'text', 'scale'];
      value: 'badges.topLeft.text.scale';
    }
  | {
      key: ['badges', 'topLeft', 'text', 'font'];
      value: 'badges.topLeft.text.font';
    }
  | {
      key: ['badges', 'topLeft', 'text', 'style'];
      value: 'badges.topLeft.text.style';
    }
  | {
      key: ['badges', 'topRight'];
      value: 'badges.topRight';
    }
  | {
      key: ['badges', 'topRight', 'color'];
      value: 'badges.topRight.color';
    }
  | {
      key: ['badges', 'topRight', 'scale'];
      value: 'badges.topRight.scale';
    }
  | {
      key: ['badges', 'topRight', 'minVisibleSize'];
      value: 'badges.topRight.minVisibleSize';
    }
  | {
      key: ['badges', 'topRight', 'positionScale'];
      value: 'badges.topRight.positionScale';
    }
  | {
      key: ['badges', 'topRight', 'image'];
      value: 'badges.topRight.image';
    }
  | {
      key: ['badges', 'topRight', 'image', 'url'];
      value: 'badges.topRight.image.url';
    }
  | {
      key: ['badges', 'topRight', 'image', 'scale'];
      value: 'badges.topRight.image.scale';
    }
  | {
      key: ['badges', 'topRight', 'stroke', 'color'];
      value: 'badges.topRight.stroke.color';
    }
  | {
      key: ['badges', 'topRight', 'stroke', 'scalingMethod'];
      value: 'badges.topRight.stroke.scalingMethod';
    }
  | {
      key: ['badges', 'topRight', 'stroke', 'width'];
      value: 'badges.topRight.stroke.width';
    }
  | {
      key: ['badges', 'topRight', 'text'];
      value: 'badges.topRight.text';
    }
  | {
      key: ['badges', 'topRight', 'text', 'content'];
      value: 'badges.topRight.text.content';
    }
  | {
      key: ['badges', 'topRight', 'text', 'color'];
      value: 'badges.topRight.text.color';
    }
  | {
      key: ['badges', 'topRight', 'text', 'scale'];
      value: 'badges.topRight.text.scale';
    }
  | {
      key: ['badges', 'topRight', 'text', 'font'];
      value: 'badges.topRight.text.font';
    }
  | {
      key: ['badges', 'topRight', 'text', 'style'];
      value: 'badges.topRight.text.style';
    }
  | {
      key: ['badges', 'bottomLeft'];
      value: 'badges.bottomLeft';
    }
  | {
      key: ['badges', 'bottomLeft', 'color'];
      value: 'badges.bottomLeft.color';
    }
  | {
      key: ['badges', 'bottomLeft', 'scale'];
      value: 'badges.bottomLeft.scale';
    }
  | {
      key: ['badges', 'bottomLeft', 'minVisibleSize'];
      value: 'badges.bottomLeft.minVisibleSize';
    }
  | {
      key: ['badges', 'bottomLeft', 'positionScale'];
      value: 'badges.bottomLeft.positionScale';
    }
  | {
      key: ['badges', 'bottomLeft', 'image'];
      value: 'badges.bottomLeft.image';
    }
  | {
      key: ['badges', 'bottomLeft', 'image', 'url'];
      value: 'badges.bottomLeft.image.url';
    }
  | {
      key: ['badges', 'bottomLeft', 'image', 'scale'];
      value: 'badges.bottomLeft.image.scale';
    }
  | {
      key: ['badges', 'bottomLeft', 'stroke', 'color'];
      value: 'badges.bottomLeft.stroke.color';
    }
  | {
      key: ['badges', 'bottomLeft', 'stroke', 'scalingMethod'];
      value: 'badges.bottomLeft.stroke.scalingMethod';
    }
  | {
      key: ['badges', 'bottomLeft', 'stroke', 'width'];
      value: 'badges.bottomLeft.stroke.width';
    }
  | {
      key: ['badges', 'bottomLeft', 'text'];
      value: 'badges.bottomLeft.text';
    }
  | {
      key: ['badges', 'bottomLeft', 'text', 'content'];
      value: 'badges.bottomLeft.text.content';
    }
  | {
      key: ['badges', 'bottomLeft', 'text', 'color'];
      value: 'badges.bottomLeft.text.color';
    }
  | {
      key: ['badges', 'bottomLeft', 'text', 'scale'];
      value: 'badges.bottomLeft.text.scale';
    }
  | {
      key: ['badges', 'bottomLeft', 'text', 'font'];
      value: 'badges.bottomLeft.text.font';
    }
  | {
      key: ['badges', 'bottomLeft', 'text', 'style'];
      value: 'badges.bottomLeft.text.style';
    }
  | {
      key: ['badges', 'bottomRight'];
      value: 'badges.bottomRight';
    }
  | {
      key: ['badges', 'bottomRight', 'color'];
      value: 'badges.bottomRight.color';
    }
  | {
      key: ['badges', 'bottomRight', 'scale'];
      value: 'badges.bottomRight.scale';
    }
  | {
      key: ['badges', 'bottomRight', 'minVisibleSize'];
      value: 'badges.bottomRight.minVisibleSize';
    }
  | {
      key: ['badges', 'bottomRight', 'positionScale'];
      value: 'badges.bottomRight.positionScale';
    }
  | {
      key: ['badges', 'bottomRight', 'image'];
      value: 'badges.bottomRight.image';
    }
  | {
      key: ['badges', 'bottomRight', 'image', 'url'];
      value: 'badges.bottomRight.image.url';
    }
  | {
      key: ['badges', 'bottomRight', 'image', 'scale'];
      value: 'badges.bottomRight.image.scale';
    }
  | {
      key: ['badges', 'bottomRight', 'stroke', 'color'];
      value: 'badges.bottomRight.stroke.color';
    }
  | {
      key: ['badges', 'bottomRight', 'stroke', 'scalingMethod'];
      value: 'badges.bottomRight.stroke.scalingMethod';
    }
  | {
      key: ['badges', 'bottomRight', 'stroke', 'width'];
      value: 'badges.bottomRight.stroke.width';
    }
  | {
      key: ['badges', 'bottomRight', 'text'];
      value: 'badges.bottomRight.text';
    }
  | {
      key: ['badges', 'bottomRight', 'text', 'content'];
      value: 'badges.bottomRight.text.content';
    }
  | {
      key: ['badges', 'bottomRight', 'text', 'color'];
      value: 'badges.bottomRight.text.color';
    }
  | {
      key: ['badges', 'bottomRight', 'text', 'scale'];
      value: 'badges.bottomRight.text.scale';
    }
  | {
      key: ['badges', 'bottomRight', 'text', 'font'];
      value: 'badges.bottomRight.text.font';
    }
  | {
      key: ['badges', 'bottomRight', 'text', 'style'];
      value: 'badges.bottomRight.text.style';
    }
  | {
      key: ['halo'];
      value: 'halo';
    }
  | {
      key: ['halo', 'color'];
      value: 'halo.color';
    }
  | {
      key: ['halo', 'width'];
      value: 'halo.width';
    }
  | {
      key: ['halo', 'scalingMethod'];
      value: 'halo.scalingMethod';
    }
  | {
      key: ['halo', 'strokeColor'];
      value: 'halo.strokeColor';
    }
  | {
      key: ['halo', 'strokeWidth'];
      value: 'halo.strokeWidth';
    }
  | {
      key: ['halo', 'hideNonAdjacentEdges'];
      value: 'halo.hideNonAdjacentEdges';
    }
  | {
      key: ['pulse'];
      value: 'pulse';
    }
  | {
      key: ['pulse', 'enabled'];
      value: 'pulse.enabled';
    }
  | {
      key: ['pulse', 'duration'];
      value: 'pulse.duration';
    }
  | {
      key: ['pulse', 'interval'];
      value: 'pulse.interval';
    }
  | {
      key: ['pulse', 'startColor'];
      value: 'pulse.startColor';
    }
  | {
      key: ['pulse', 'endColor'];
      value: 'pulse.endColor';
    }
  | {
      key: ['pulse', 'width'];
      value: 'pulse.width';
    }
  | {
      key: ['pulse', 'startRatio'];
      value: 'pulse.startRatio';
    }
  | {
      key: ['pulse', 'endRatio'];
      value: 'pulse.endRatio';
    }
  | {
      key: ['icon'];
      value: 'icon';
    }
  | {
      key: ['icon', 'content'];
      value: 'icon.content';
    }
  | {
      key: ['icon', 'font'];
      value: 'icon.font';
    }
  | {
      key: ['icon', 'color'];
      value: 'icon.color';
    }
  | {
      key: ['icon', 'scale'];
      value: 'icon.scale';
    }
  | {
      key: ['icon', 'style'];
      value: 'icon.style';
    }
  | {
      key: ['icon', 'minVisibleSize'];
      value: 'icon.minVisibleSize';
    }
  | {
      key: ['image'];
      value: 'image';
    }
  | {
      key: ['image', 'url'];
      value: 'image.url';
    }
  | {
      key: ['image', 'scale'];
      value: 'image.scale';
    }
  | {
      key: ['image', 'fit'];
      value: 'image.fit';
    }
  | {
      key: ['image', 'tile'];
      value: 'image.tile';
    }
  | {
      key: ['image', 'minVisibleSize'];
      value: 'image.minVisibleSize';
    }
  | {
      key: ['outline'];
      value: 'outline';
    }
  | {
      key: ['outline', 'enabled'];
      value: 'outline.enabled';
    }
  | {
      key: ['outline', 'color'];
      value: 'outline.color';
    }
  | {
      key: ['outline', 'minVisibleSize'];
      value: 'outline.minVisibleSize';
    }
  | {
      key: ['text'];
      value: 'text';
    }
  | {
      key: ['text', 'content'];
      value: 'text.content';
    }
  | {
      key: ['text', 'font'];
      value: 'text.font';
    }
  | {
      key: ['text', 'color'];
      value: 'text.color';
    }
  | {
      key: ['text', 'size'];
      value: 'text.size';
    }
  | {
      key: ['text', 'scale'];
      value: 'text.scale';
    }
  | {
      key: ['text', 'style'];
      value: 'text.style';
    }
  | {
      key: ['text', 'align'];
      value: 'text.align';
    }
  | {
      key: ['text', 'margin'];
      value: 'text.margin';
    }
  | {
      key: ['text', 'padding'];
      value: 'text.padding';
    }
  | {
      key: ['text', 'backgroundColor'];
      value: 'text.backgroundColor';
    }
  | {
      key: ['text', 'tip'];
      value: 'text.tip';
    }
  | {
      key: ['text', 'minVisibleSize'];
      value: 'text.minVisibleSize';
    }
  | {
      key: ['text', 'scale'];
      value: 'text.scale';
    }
  | {
      key: ['text', 'position'];
      value: 'text.position';
    }
  | {
      key: ['text', 'scaling'];
      value: 'text.scaling';
    }
  | {
      key: ['text', 'maxLineLength'];
      value: 'text.maxLineLength';
    }
  | {
      key: ['text', 'secondary'];
      value: 'text.secondary';
    }
  | {
      key: ['text', 'secondary', 'content'];
      value: 'text.secondary.content';
    }
  | {
      key: ['text', 'secondary', 'font'];
      value: 'text.secondary.font';
    }
  | {
      key: ['text', 'secondary', 'color'];
      value: 'text.secondary.color';
    }
  | {
      key: ['text', 'secondary', 'size'];
      value: 'text.secondary.size';
    }
  | {
      key: ['text', 'secondary', 'scale'];
      value: 'text.secondary.scale';
    }
  | {
      key: ['text', 'secondary', 'style'];
      value: 'text.secondary.style';
    }
  | {
      key: ['text', 'secondary', 'align'];
      value: 'text.secondary.align';
    }
  | {
      key: ['text', 'secondary', 'margin'];
      value: 'text.secondary.margin';
    }
  | {
      key: ['text', 'secondary', 'padding'];
      value: 'text.secondary.padding';
    }
  | {
      key: ['text', 'secondary', 'backgroundColor'];
      value: 'text.secondary.backgroundColor';
    }
  | {
      key: ['text', 'secondary', 'minVisibleSize'];
      value: 'text.secondary.minVisibleSize';
    };
declare type NodeAttributesKeys = keyof NodeAttributeTypes;
declare type NodeAttributesTuplesKeys = NodeAttributeTupleTypes['key'];
declare type NodeMappedTupleAttributes<T> = MappedTuple<
  T,
  NodeAttributeTupleTypes
>['value'];
interface NodeAttributeSubTreeTypes {
  x: Pick1<NodeAttributesRequiredObjects, 'x'>;
  y: Pick1<NodeAttributesRequiredObjects, 'y'>;
  radius: Pick1<NodeAttributesRequiredObjects, 'radius'>;
  scalingMethod: Pick1<NodeAttributesRequiredObjects, 'scalingMethod'>;
  color: Pick1<NodeAttributesRequiredObjects, 'color'>;
  opacity: Pick1<NodeAttributesRequiredObjects, 'opacity'>;
  shape: Pick1<NodeAttributesRequiredObjects, 'shape'>;
  layer: Pick1<NodeAttributesRequiredObjects, 'layer'>;
  detectable: Pick1<NodeAttributesRequiredObjects, 'detectable'>;
  draggable: Pick1<NodeAttributesRequiredObjects, 'draggable'>;
  layoutable: Pick1<NodeAttributesRequiredObjects, 'layoutable'>;
  innerStroke: Pick1<NodeAttributesRequiredObjects, 'innerStroke'>;
  'innerStroke.width': Pick2<
    NodeAttributesRequiredObjects,
    'innerStroke',
    'width'
  >;
  'innerStroke.scalingMethod': Pick2<
    NodeAttributesRequiredObjects,
    'innerStroke',
    'scalingMethod'
  >;
  'innerStroke.color': Pick2<
    NodeAttributesRequiredObjects,
    'innerStroke',
    'color'
  >;
  'innerStroke.minVisibleSize': Pick2<
    NodeAttributesRequiredObjects,
    'innerStroke',
    'minVisibleSize'
  >;
  outerStroke: Pick1<NodeAttributesRequiredObjects, 'outerStroke'>;
  'outerStroke.width': Pick2<
    NodeAttributesRequiredObjects,
    'outerStroke',
    'width'
  >;
  'outerStroke.scalingMethod': Pick2<
    NodeAttributesRequiredObjects,
    'outerStroke',
    'scalingMethod'
  >;
  'outerStroke.color': Pick2<
    NodeAttributesRequiredObjects,
    'outerStroke',
    'color'
  >;
  'outerStroke.minVisibleSize': Pick2<
    NodeAttributesRequiredObjects,
    'outerStroke',
    'minVisibleSize'
  >;
  badges: NodeAttributesRequiredObjects['badges'];
  'badges.topLeft': Pick2<NodeAttributesRequiredObjects, 'badges', 'topLeft'>;
  'badges.topLeft.color': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'color'
  >;
  'badges.topLeft.scale': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'scale'
  >;
  'badges.topLeft.positionScale': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'positionScale'
  >;
  'badges.topLeft.minVisibleSize': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'minVisibleSize'
  >;
  'badges.topLeft.image': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'image',
    'url'
  >;
  'badges.topLeft.image.url': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'image',
    'url'
  >;
  'badges.topLeft.image.scale': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'image',
    'scale'
  >;
  'badges.topLeft.stroke.color': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'stroke',
    'color'
  >;
  'badges.topLeft.stroke.width': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'stroke',
    'width'
  >;
  'badges.topLeft.stroke.scalingMethod': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'stroke',
    'scalingMethod'
  >;
  'badges.topLeft.text': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'text',
    'content'
  >;
  'badges.topLeft.text.content': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'text',
    'content'
  >;
  'badges.topLeft.text.color': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'text',
    'color'
  >;
  'badges.topLeft.text.font': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'text',
    'font'
  >;
  'badges.topLeft.text.style': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'text',
    'style'
  >;
  'badges.topLeft.text.scale': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topLeft',
    'text',
    'scale'
  >;
  'badges.topRight': Pick2<NodeAttributesRequiredObjects, 'badges', 'topRight'>;
  'badges.topRight.color': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'color'
  >;
  'badges.topRight.scale': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'scale'
  >;
  'badges.topRight.positionScale': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'positionScale'
  >;
  'badges.topRight.minVisibleSize': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'minVisibleSize'
  >;
  'badges.topRight.image': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'image',
    'url'
  >;
  'badges.topRight.image.url': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'image',
    'url'
  >;
  'badges.topRight.image.scale': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'image',
    'scale'
  >;
  'badges.topRight.stroke.color': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'stroke',
    'color'
  >;
  'badges.topRight.stroke.width': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'stroke',
    'width'
  >;
  'badges.topRight.stroke.scalingMethod': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'stroke',
    'scalingMethod'
  >;
  'badges.topRight.text': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'text',
    'content'
  >;
  'badges.topRight.text.content': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'text',
    'content'
  >;
  'badges.topRight.text.color': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'text',
    'color'
  >;
  'badges.topRight.text.font': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'text',
    'font'
  >;
  'badges.topRight.text.style': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'text',
    'style'
  >;
  'badges.topRight.text.scale': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'topRight',
    'text',
    'scale'
  >;
  'badges.bottomLeft': Pick2<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft'
  >;
  'badges.bottomLeft.color': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'color'
  >;
  'badges.bottomLeft.scale': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'scale'
  >;
  'badges.bottomLeft.positionScale': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'positionScale'
  >;
  'badges.bottomLeft.minVisibleSize': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'minVisibleSize'
  >;
  'badges.bottomLeft.image': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'image',
    'url'
  >;
  'badges.bottomLeft.image.url': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'image',
    'url'
  >;
  'badges.bottomLeft.image.scale': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'image',
    'scale'
  >;
  'badges.bottomLeft.stroke.color': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'stroke',
    'color'
  >;
  'badges.bottomLeft.stroke.width': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'stroke',
    'width'
  >;
  'badges.bottomLeft.stroke.scalingMethod': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'stroke',
    'scalingMethod'
  >;
  'badges.bottomLeft.text': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'text',
    'content'
  >;
  'badges.bottomLeft.text.content': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'text',
    'content'
  >;
  'badges.bottomLeft.text.color': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'text',
    'color'
  >;
  'badges.bottomLeft.text.font': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'text',
    'font'
  >;
  'badges.bottomLeft.text.style': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'text',
    'style'
  >;
  'badges.bottomLeft.text.scale': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomLeft',
    'text',
    'scale'
  >;
  'badges.bottomRight': Pick2<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight'
  >;
  'badges.bottomRight.color': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'color'
  >;
  'badges.bottomRight.scale': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'scale'
  >;
  'badges.bottomRight.positionScale': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'positionScale'
  >;
  'badges.bottomRight.minVisibleSize': Pick3<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'minVisibleSize'
  >;
  'badges.bottomRight.image': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'image',
    'url'
  >;
  'badges.bottomRight.image.url': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'image',
    'url'
  >;
  'badges.bottomRight.image.scale': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'image',
    'scale'
  >;
  'badges.bottomRight.stroke.color': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'stroke',
    'color'
  >;
  'badges.bottomRight.stroke.width': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'stroke',
    'width'
  >;
  'badges.bottomRight.stroke.scalingMethod': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'stroke',
    'scalingMethod'
  >;
  'badges.bottomRight.text': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'text',
    'content'
  >;
  'badges.bottomRight.text.content': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'text',
    'content'
  >;
  'badges.bottomRight.text.color': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'text',
    'color'
  >;
  'badges.bottomRight.text.font': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'text',
    'font'
  >;
  'badges.bottomRight.text.style': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'text',
    'style'
  >;
  'badges.bottomRight.text.scale': Pick4<
    NodeAttributesRequiredObjects,
    'badges',
    'bottomRight',
    'text',
    'scale'
  >;
  halo: Pick1<NodeAttributesRequiredObjects, 'halo'>;
  'halo.color': Pick2<NodeAttributesRequiredObjects, 'halo', 'color'>;
  'halo.width': Pick2<NodeAttributesRequiredObjects, 'halo', 'width'>;
  'halo.scalingMethod': Pick2<
    NodeAttributesRequiredObjects,
    'halo',
    'scalingMethod'
  >;
  'halo.strokeColor': Pick2<
    NodeAttributesRequiredObjects,
    'halo',
    'strokeColor'
  >;
  'halo.strokeWidth': Pick2<
    NodeAttributesRequiredObjects,
    'halo',
    'strokeWidth'
  >;
  'halo.hideNonAdjacentEdges': Pick2<
    NodeAttributesRequiredObjects,
    'halo',
    'hideNonAdjacentEdges'
  >;
  pulse: Pick1<NodeAttributesRequiredObjects, 'pulse'>;
  'pulse.enabled': Pick2<NodeAttributesRequiredObjects, 'pulse', 'enabled'>;
  'pulse.duration': Pick2<NodeAttributesRequiredObjects, 'pulse', 'duration'>;
  'pulse.interval': Pick2<NodeAttributesRequiredObjects, 'pulse', 'interval'>;
  'pulse.startColor': Pick2<
    NodeAttributesRequiredObjects,
    'pulse',
    'startColor'
  >;
  'pulse.endColor': Pick2<NodeAttributesRequiredObjects, 'pulse', 'endColor'>;
  'pulse.width': Pick2<NodeAttributesRequiredObjects, 'pulse', 'width'>;
  'pulse.startRatio': Pick2<
    NodeAttributesRequiredObjects,
    'pulse',
    'startRatio'
  >;
  'pulse.endRatio': Pick2<NodeAttributesRequiredObjects, 'pulse', 'endRatio'>;
  icon: Pick1<NodeAttributesRequiredObjects, 'icon'>;
  'icon.content': Pick2<NodeAttributesRequiredObjects, 'icon', 'content'>;
  'icon.font': Pick2<NodeAttributesRequiredObjects, 'icon', 'font'>;
  'icon.color': Pick2<NodeAttributesRequiredObjects, 'icon', 'color'>;
  'icon.scale': Pick2<NodeAttributesRequiredObjects, 'icon', 'scale'>;
  'icon.style': Pick2<NodeAttributesRequiredObjects, 'icon', 'style'>;
  'icon.minVisibleSize': Pick2<
    NodeAttributesRequiredObjects,
    'icon',
    'minVisibleSize'
  >;
  image: Pick1<NodeAttributesRequiredObjects, 'image'>;
  'image.url': Pick2<NodeAttributesRequiredObjects, 'image', 'url'>;
  'image.scale': Pick2<NodeAttributesRequiredObjects, 'image', 'scale'>;
  'image.fit': Pick2<NodeAttributesRequiredObjects, 'image', 'fit'>;
  'image.tile': Pick2<NodeAttributesRequiredObjects, 'image', 'tile'>;
  'image.minVisibleSize': Pick2<
    NodeAttributesRequiredObjects,
    'image',
    'minVisibleSize'
  >;
  outline: Pick1<NodeAttributesRequiredObjects, 'outline'>;
  'outline.enabled': Pick2<NodeAttributesRequiredObjects, 'outline', 'enabled'>;
  'outline.color': Pick2<NodeAttributesRequiredObjects, 'outline', 'color'>;
  'outline.minVisibleSize': Pick2<
    NodeAttributesRequiredObjects,
    'outline',
    'minVisibleSize'
  >;
  text: Pick1<NodeAttributesRequiredObjects, 'text'>;
  'text.content': Pick2<NodeAttributesRequiredObjects, 'text', 'content'>;
  'text.font': Pick2<NodeAttributesRequiredObjects, 'text', 'font'>;
  'text.color': Pick2<NodeAttributesRequiredObjects, 'text', 'color'>;
  'text.size': Pick2<NodeAttributesRequiredObjects, 'text', 'size'>;
  'text.scale': Pick2<NodeAttributesRequiredObjects, 'text', 'scale'>;
  'text.style': Pick2<NodeAttributesRequiredObjects, 'text', 'style'>;
  'text.align': Pick2<NodeAttributesRequiredObjects, 'text', 'align'>;
  'text.margin': Pick2<NodeAttributesRequiredObjects, 'text', 'margin'>;
  'text.padding': Pick2<NodeAttributesRequiredObjects, 'text', 'padding'>;
  'text.backgroundColor': Pick2<
    NodeAttributesRequiredObjects,
    'text',
    'backgroundColor'
  >;
  'text.tip': Pick2<NodeAttributesRequiredObjects, 'text', 'tip'>;
  'text.minVisibleSize': Pick2<
    NodeAttributesRequiredObjects,
    'text',
    'minVisibleSize'
  >;
  'text.scaling': Pick2<NodeAttributesRequiredObjects, 'text', 'scaling'>;
  'text.position': Pick2<NodeAttributesRequiredObjects, 'text', 'position'>;
  'text.maxLineLength': Pick2<
    NodeAttributesRequiredObjects,
    'text',
    'maxLineLength'
  >;
  'text.secondary': Pick2<NodeAttributesRequiredObjects, 'text', 'secondary'>;
  'text.secondary.content': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'content'
  >;
  'text.secondary.font': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'font'
  >;
  'text.secondary.color': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'color'
  >;
  'text.secondary.size': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'size'
  >;
  'text.secondary.scale': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'scale'
  >;
  'text.secondary.style': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'style'
  >;
  'text.secondary.align': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'align'
  >;
  'text.secondary.margin': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'margin'
  >;
  'text.secondary.padding': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'padding'
  >;
  'text.secondary.backgroundColor': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'backgroundColor'
  >;
  'text.secondary.minVisibleSize': Pick3<
    NodeAttributesRequiredObjects,
    'text',
    'secondary',
    'minVisibleSize'
  >;
  data: {
    data: any;
  };
  animationDuration: {
    animationDuration: number;
  };
  animationStart: {
    animationStart: number;
  };
  animationEasing: {
    animationEasing: Easing;
  };
  excluded: {
    excluded: 0 | 1;
  };
  virtual: {
    virtual: 0 | 1;
  };
  removed: {
    removed: 0 | 1;
  };
  object: {
    object: Node;
  };
  'geo.latitude': {
    'geo.latitude': number;
  };
  'geo.longitude': {
    'geo.longitude': number;
  };
  id: {
    id: ItemId;
  };
  textHidden: {
    textHidden: 0 | 1;
  };
}

/**
 * @public
 */
declare type NodeShape =
  | 'circle'
  | 'cross'
  | 'diamond'
  | 'pentagon'
  | 'square'
  | 'star'
  | 'equilateral';
interface Stroke {
  width?: PixelSize;
  scalingMethod?: ScalingMethod;
  color?: Color | 'inherit';
  minVisibleSize?: number;
}
interface NodeImage {
  url?: string | null;
  scale?: number;
  fit?: boolean;
  tile?: boolean;
  minVisibleSize?: number;
  rescale?: boolean;
  duplicate?: boolean;
}
interface Halo {
  color?: Color;
  width?: PixelSize;
  scalingMethod?: ScalingMethod;
  strokeColor?: Color;
  strokeWidth?: PixelSize;
  hideNonAdjacentEdges?: boolean;
  size?: PixelSize;
}
interface Pulse {
  enabled?: boolean;
  duration?: number;
  interval?: number;
  startColor?: Color;
  endColor?: Color;
  width?: number;
  startRatio?: number;
  endRatio?: number;
}
interface Icon {
  content?: TextContent;
  font?: string;
  color?: Color;
  scale?: number;
  style?: FontStyle;
  minVisibleSize?: number;
}
interface Outline {
  enabled?: boolean;
  color?: Color;
  minVisibleSize?: number;
}
/**
 * This type is used to define other attributes notation
 * Note: this is not just Required<NodeTextStyle> because content is optional
 */
declare type NodeTextStyleRequired = Required<
  Omit$1<NodeTextStyle, 'content' | 'secondary'>
> & {
  content?: NodeTextStyle['content'];
  secondary: Required<Omit$1<SecondaryNodeTextStyle, 'content'>> & {
    content?: TextContent;
  };
};
/**
 * @public
 *
 * @property {number} [x=0]                                                    X coordinate of the node (graph space)
 * @property {number} [y=0]                                                    Y coordinate of the node (graph space)
 * @property {OpacityValue} [opacity=1]                                        Opacity of the node.
 * @property {PixelSize} [radius=5]                                            Indicates the radius of the node (graph size)
 * @property {ScalingMethod} [scalingMethod="scaled"]                          Indicates if the radius should be multiplied by the zoom when the node is displayed.
 * @property {Color|Array<Color>} [color="grey"]                               Color of the node
 * @property {NodeShape} [shape="circle"]                                      Shape of the node
 * @property {LayerValue} [layer=0]                                            Z-index of the node. Integer value between 1 and 3.
 * @property {boolean} [detectable=true]                                       Indicates if the node is detectable by the mouse.
 * @property {boolean} [draggable=true]                                        Indicates if the node is draggable by the user
 * @property {boolean} [layoutable=true]                                       Indicates if the node movable by the layout algorithm
 *                                                                             Some of the layouts (ForceLink) would take the non-movable nodes
 *                                                                             into account by making other nodes avoid them, others
 *                                                                             would just ignore them in calculations.
 *
 * @property {object|Color|"inherit"} [innerStroke]                            If not an object, alias for `innerStroke.color`
 * @property {PixelSize} [innerStroke.width=2]                                 Width of the node's inner stroke
 * @property {ScalingMethod} [innerStroke.scalingMethod="fixed"]               Indicates if the inner stroke width should be multiplied by the zoom when the node is displayed.
 * @property {Color|"inherit"} [innerStroke.color="white"]                     Color of the node's inner stroke
 * @property {number} [innerStroke.minVisibleSize=12]                           If the node diameter on screen is less than this value, the inner stroke will not be shown
 *
 * @property {object|Color|"inherit"} [outerStroke]                            If not an object, alias for `outerStroke.color`
 * @property {PixelSize} [outerStroke.width=5]                                 Width of the node's outer stroke
 * @property {ScalingMethod} [outerStroke.scalingMethod="fixed"]               Indicates if the outer stroke width should be multiplied by the zoom when the node is displayed.
 * @property {Color|"inherit"} [outerStroke.color=null]                        Color of the node's outer stroke
 * @property {number} [outerStroke.minVisibleSize=0]                           If the node diameter on screen is less than this value, the outer stroke will not be shown
 *
 * @property {object|Color|null} [halo]                                        If not an object, alias for `halo.color`
 * @property {Color} [halo.color=null]                                         Color of the halo
 * @property {PixelSize} [halo.width=50]                                       Width of the halo, in pixels
 * @property {ScalingMethod} [halo.scalingMethod="fixed"]                      Indicates if the halo width should be multiplied by the zoom when the node is displayed.
 * @property {Color} [halo.strokeColor=null]                                   Color of the stroke of the halo
 * @property {PixelSize} [halo.strokeWidth=1]                                  Width of the stroke of the halo
 * @property {boolean} [halo.hideNonAdjacentEdges=false]                       If true, the halo hides edges which don't have at least one extremity with `halo.hideNonAdjacentEdges` to `true`.
 *
 * @property {object|null} [pulse]
 * @property {boolean} [pulse.enabled=false]                                   If true, shows animated pulse around the node.
 * @property {number} [pulse.duration=1000]                                    Lifespan of one pulse ripple (milliseconds).
 * @property {number} [pulse.interval=800]                                     Interval between two pulses (milliseconds).
 * @property {Color}  [pulse.startColor="rgba(0, 0, 0, 0.6)"]                  Starting color of the pulse
 * @property {Color}  [pulse.endColor="rgba(0, 0, 0, 0)"]                      End color of the pulse
 * @property {number} [pulse.width=50]                                         Width of the pulse in pixels
 * @property {number} [pulse.startRatio=1]                                     Where the pulse starts, relative to the node size (1 = at the node's border)
 * @property {number} [pulse.endRatio=2]                                       Where the pulse ends, relative to the node size (2 = 2x size of the node)
 *
 * @property {object|TextContent} [icon]                                       If not an object, alias for `icon.content`
 * @property {TextContent} [icon.content]                                      Text to display inside the icon
 * @property {string} [icon.font="Arial"]                                      Font used to display the icon text
 * @property {Color} [icon.color="black"]                                      Color used to display the icon text
 * @property {number} [icon.scale=0.7]                                         Text size relative to the node diameter
 * @property {FontStyle} [icon.style="normal"]                                   Style applied to the icon.
 * @property {number} [icon.minVisibleSize=12]                                 If the node diameter on screen is less than this value, the icon will not be shown
 *
 * @property {object|string|null} [image]                                      If not an object, alias for `image.url`
 * @property {string|null} [image.url=null]                                    URL of the image to display
 * @property {number} [image.scale=1]                                          Size of the image relative to the node diameter
 * @property {boolean} [image.fit=true]                                        Indicates if the image should be rescaled to fit the node
 * @property {boolean} [image.tile=false]                                      If the image is smaller than the node, indicates if the image should be duplicated to fill the node. If true, `fit` will be considered to be `false`.
 * @property {number} [image.minVisibleSize=12]                                If the node diameter on screen is less than this value, the image will not be shown
 *
 * @property {object|boolean} [outline]                                        If not an object, alias for `outline.enabled`
 * @property {boolean} [outline.enabled=false]                                 Indicates if the outline should be visible
 * @property {Color} [outline.color="rgba(0, 0, 0, 0.36)"]                     Color of the outline
 * @property {number} [outline.minVisibleSize=12]                              If the node diameter on screen is less than this value, the outline will ne be shown
 *
 * @property {object} [badges]
 * @property {Badge} [badges.topLeft]
 * @property {Badge} [badges.topRight]
 * @property {Badge} [badges.bottomLeft]
 * @property {Badge} [badges.bottomRight]
 *
 * @property {object|TextContent} [text]                                       If not an object, alias for `text.content`
 * @property {TextContent} [text.content=null]                                 Text to display
 * @property {string} [text.font="Arial"]                                      Font used to display the text
 * @property {Color|"inherit"} [text.color="black"]                            Color of the text
 * @property {PixelSize} [text.size=12]                                        Text size (in pixels)
 * @property {number} [text.scale=0.1]                                         Text size relative to the node diameter
 * @property {boolean} [text.scaling=false]                                    Indicates if the `size` property (false) or the `scale` property (true) must be used to compute the text size. Affects both primary and secondary text.
 * @property {FontStyle} [text.style="normal"]                                   Style applied to the text
 * @property {TextAlign} [text.align="center"]                                 Alignment of the text (for multi-line texts)
 * @property {PixelSize} [text.margin=10]                                      Additional space (in pixels) between the node and the text
 * @property {PixelSize} [text.padding=2]                                      Space between the text and its background's edge, in pixels
 * @property {Color|"inherit"|null} [text.backgroundColor=null]                Background color of the text
 * @property {boolean} [text.tip=true]                                         Indicates if the margin between the text and the background should be filled with a small arrow pointing towards the node
 * @property {TextPosition} [text.position="bottom"] Position of the text relative to the node
 * @property {number} [text.minVisibleSize=24]                                 If the node diameter on screen is less than this value, the text will not be shown
 * @property {number} [text.maxLineLength=0]                                   If > 1, lines that have more characters than this value will be split across multiple lines. Affects both primary and secondary texts.
 *
 * @property {object|TextContent} [text.secondary]                             If not an object, alias for `text.secondary.content`
 * @property {TextContent} [text.secondary.content=null]                       Secondary text content. The secondary text is always displayed below the node.
 * @property {string} [text.secondary.font="Arial"]                            Font used to display the secondary text
 * @property {Color|"inherit"} [text.secondary.color="black"]                  Color of the secondary text
 * @property {PixelSize} [text.secondary.size=10]                              Secondary text size (in pixels)
 * @property {number} [text.secondary.scale=0.08]                              Secondary text size (relative to the node diameter)
 * @property {FontStyle} [text.secondary.style="normal"]                         Secondary text style
 * @property {TextAlign} [text.secondary.align="center"]                       Alignment of the secondary text (for multi-line texts)
 * @property {PixelSize} [text.secondary.margin=2]                             Space (in pixels) on top of the secondary text.
 * @property {PixelSize} [text.secondary.padding=2]                            Space (in pixels) between the text and its background's edge
 * @property {Color|"inherit"|null} [text.secondary.backgroundColor=null]      Background color of the secondary text
 * @property {number} [text.secondary.minVisibleSize=24]                       If the node diameter on screen is less than this value, the secondary text will not be shown
 */
interface NodeAttributes {
  x?: number;
  y?: number;
  opacity?: OpacityValue;
  radius?: PixelSize;
  scalingMethod?: ScalingMethod;
  color?: Color | Color[];
  shape?: NodeShape;
  layer?: LayerValue;
  detectable?: boolean;
  draggable?: boolean;
  layoutable?: boolean;
  innerStroke?: Stroke | Color | 'inherit';
  outerStroke?: Stroke | Color | 'inherit';
  halo?: Color | null | Halo;
  pulse?: Pulse | null;
  icon?: Icon | TextContent;
  image?: NodeImage | string | null;
  outline?: Outline | boolean;
  badges?: {
    topLeft?: Badge;
    topRight?: Badge;
    bottomLeft?: Badge;
    bottomRight?: Badge;
  };
  text?: NodeTextStyle | TextContent;
}
declare type nonPrimitiveNodeAttributes =
  | 'halo'
  | 'text'
  | 'badges'
  | 'outline'
  | 'image'
  | 'icon'
  | 'pulse'
  | 'innerStroke'
  | 'outerStroke';
declare type RequiredIcon = Required<Omit$1<Icon, 'content'>> & {
  content?: TextContent;
};
declare type NodeAttributesRequiredObjects = Omit$1<
  Required<NodeAttributes>,
  nonPrimitiveNodeAttributes
> & {
  innerStroke: Required<Stroke>;
  outerStroke: Required<Stroke>;
  halo: Required<Halo>;
  text: NodeTextStyleRequired;
  outline: Required<Outline>;
  pulse: Required<Pulse>;
  image: Required<NodeImage>;
  icon: RequiredIcon;
  badges: {
    topLeft: BadgeRequired;
    topRight: BadgeRequired;
    bottomLeft: BadgeRequired;
    bottomRight: BadgeRequired;
  };
};
interface NodeAttributesRequiredPrimitives {
  innerStroke: Color | 'inherit';
  outerStroke: Color | 'inherit';
  halo: Color | null;
  text: TextContent;
  outline: boolean;
  pulse: null;
  image: string | null;
  icon: TextContent;
  geo: {
    latitude: number;
    longitude: number;
  };
  badges: {
    topLeft: {
      image: string;
      text: TextContent;
    };
    topRight: {
      image: string;
      text: TextContent;
    };
    bottomLeft: {
      image: string;
      text: TextContent;
    };
    bottomRight: {
      image: string;
      text: TextContent;
    };
  };
}
declare type ObjectMapping$1 =
  | NodeAttributesRequiredObjects
  | NodeAttributeTypesTree;
declare type PrimitiveMapping$1 =
  | NodeAttributesRequiredPrimitives
  | NodeAttributeTypesTree;
interface NodeAttributesDottedMapping<
  O extends ObjectMapping$1,
  P extends PrimitiveMapping$1
> {
  x: O['x'];
  y: O['y'];
  radius: O['radius'];
  scalingMethod: O['scalingMethod'];
  color: O['color'];
  opacity: O['opacity'];
  shape: O['shape'];
  layer: O['layer'];
  detectable: O['detectable'];
  draggable: O['draggable'];
  layoutable: O['layoutable'];
  innerStroke: P['innerStroke'] | O['innerStroke'];
  'innerStroke.width': O['innerStroke']['width'];
  'innerStroke.scalingMethod': O['innerStroke']['scalingMethod'];
  'innerStroke.color': O['innerStroke']['color'];
  'innerStroke.minVisibleSize': O['innerStroke']['minVisibleSize'];
  outerStroke: P['outerStroke'] | O['outerStroke'];
  'outerStroke.width': O['outerStroke']['width'];
  'outerStroke.scalingMethod': O['outerStroke']['scalingMethod'];
  'outerStroke.color': O['outerStroke']['color'];
  'outerStroke.minVisibleSize': O['outerStroke']['minVisibleSize'];
  badges: O['badges'];
  'badges.topLeft': O['badges']['topLeft'];
  'badges.topLeft.color': O['badges']['topLeft']['color'];
  'badges.topLeft.scale': O['badges']['topLeft']['scale'];
  'badges.topLeft.positionScale': O['badges']['topLeft']['positionScale'];
  'badges.topLeft.minVisibleSize': O['badges']['topLeft']['minVisibleSize'];
  'badges.topLeft.image': P['badges']['topLeft']['image'];
  'badges.topLeft.image.url': O['badges']['topLeft']['image']['url'];
  'badges.topLeft.image.scale': O['badges']['topLeft']['image']['scale'];
  'badges.topLeft.stroke.color': O['badges']['topLeft']['stroke']['color'];
  'badges.topLeft.stroke.width': O['badges']['topLeft']['stroke']['width'];
  'badges.topLeft.stroke.scalingMethod': O['badges']['topLeft']['stroke']['scalingMethod'];
  'badges.topLeft.text': P['badges']['topLeft']['text'];
  'badges.topLeft.text.content': O['badges']['topLeft']['text']['content'];
  'badges.topLeft.text.color': O['badges']['topLeft']['text']['color'];
  'badges.topLeft.text.font': O['badges']['topLeft']['text']['font'];
  'badges.topLeft.text.style': O['badges']['topLeft']['text']['style'];
  'badges.topLeft.text.scale': O['badges']['topLeft']['text']['scale'];
  'badges.topRight': O['badges']['topRight'];
  'badges.topRight.color': O['badges']['topRight']['color'];
  'badges.topRight.scale': O['badges']['topRight']['scale'];
  'badges.topRight.positionScale': O['badges']['topRight']['positionScale'];
  'badges.topRight.minVisibleSize': O['badges']['topRight']['minVisibleSize'];
  'badges.topRight.image': P['badges']['topRight']['image'];
  'badges.topRight.image.url': O['badges']['topRight']['image']['url'];
  'badges.topRight.image.scale': O['badges']['topRight']['image']['scale'];
  'badges.topRight.stroke.color': O['badges']['topRight']['stroke']['color'];
  'badges.topRight.stroke.width': O['badges']['topRight']['stroke']['width'];
  'badges.topRight.stroke.scalingMethod': O['badges']['topRight']['stroke']['scalingMethod'];
  'badges.topRight.text': P['badges']['topRight']['text'];
  'badges.topRight.text.content': O['badges']['topRight']['text']['content'];
  'badges.topRight.text.color': O['badges']['topRight']['text']['color'];
  'badges.topRight.text.font': O['badges']['topRight']['text']['font'];
  'badges.topRight.text.style': O['badges']['topRight']['text']['style'];
  'badges.topRight.text.scale': O['badges']['topRight']['text']['scale'];
  'badges.bottomLeft': O['badges']['bottomLeft'];
  'badges.bottomLeft.color': O['badges']['bottomLeft']['color'];
  'badges.bottomLeft.scale': O['badges']['bottomLeft']['scale'];
  'badges.bottomLeft.positionScale': O['badges']['bottomLeft']['positionScale'];
  'badges.bottomLeft.minVisibleSize': O['badges']['bottomLeft']['minVisibleSize'];
  'badges.bottomLeft.image': P['badges']['bottomLeft']['image'];
  'badges.bottomLeft.image.url': O['badges']['bottomLeft']['image']['url'];
  'badges.bottomLeft.image.scale': O['badges']['bottomLeft']['image']['scale'];
  'badges.bottomLeft.stroke.color': O['badges']['bottomLeft']['stroke']['color'];
  'badges.bottomLeft.stroke.width': O['badges']['bottomLeft']['stroke']['width'];
  'badges.bottomLeft.stroke.scalingMethod': O['badges']['bottomLeft']['stroke']['scalingMethod'];
  'badges.bottomLeft.text': P['badges']['bottomLeft']['text'];
  'badges.bottomLeft.text.content': O['badges']['bottomLeft']['text']['content'];
  'badges.bottomLeft.text.color': O['badges']['bottomLeft']['text']['color'];
  'badges.bottomLeft.text.font': O['badges']['bottomLeft']['text']['font'];
  'badges.bottomLeft.text.style': O['badges']['bottomLeft']['text']['style'];
  'badges.bottomLeft.text.scale': O['badges']['bottomLeft']['text']['scale'];
  'badges.bottomRight': O['badges']['bottomRight'];
  'badges.bottomRight.color': O['badges']['bottomRight']['color'];
  'badges.bottomRight.scale': O['badges']['bottomRight']['scale'];
  'badges.bottomRight.positionScale': O['badges']['bottomRight']['positionScale'];
  'badges.bottomRight.minVisibleSize': O['badges']['bottomRight']['minVisibleSize'];
  'badges.bottomRight.image': P['badges']['bottomRight']['image'];
  'badges.bottomRight.image.url': O['badges']['bottomRight']['image']['url'];
  'badges.bottomRight.image.scale': O['badges']['bottomRight']['image']['scale'];
  'badges.bottomRight.stroke.color': O['badges']['bottomRight']['stroke']['color'];
  'badges.bottomRight.stroke.width': O['badges']['bottomRight']['stroke']['width'];
  'badges.bottomRight.stroke.scalingMethod': O['badges']['bottomRight']['stroke']['scalingMethod'];
  'badges.bottomRight.text': P['badges']['bottomRight']['text'];
  'badges.bottomRight.text.content': O['badges']['bottomRight']['text']['content'];
  'badges.bottomRight.text.color': O['badges']['bottomRight']['text']['color'];
  'badges.bottomRight.text.font': O['badges']['bottomRight']['text']['font'];
  'badges.bottomRight.text.style': O['badges']['bottomRight']['text']['style'];
  'badges.bottomRight.text.scale': O['badges']['bottomRight']['text']['scale'];
  halo: P['halo'] | O['halo'];
  'halo.color': O['halo']['color'];
  'halo.width': O['halo']['width'];
  'halo.scalingMethod': O['halo']['scalingMethod'];
  'halo.strokeColor': O['halo']['strokeColor'];
  'halo.strokeWidth': O['halo']['strokeWidth'];
  'halo.hideNonAdjacentEdges': O['halo']['hideNonAdjacentEdges'];
  pulse: P['pulse'] | O['pulse'];
  'pulse.enabled': O['pulse']['enabled'];
  'pulse.duration': O['pulse']['duration'];
  'pulse.interval': O['pulse']['interval'];
  'pulse.startColor': O['pulse']['startColor'];
  'pulse.endColor': O['pulse']['endColor'];
  'pulse.width': O['pulse']['width'];
  'pulse.startRatio': O['pulse']['startRatio'];
  'pulse.endRatio': O['pulse']['endRatio'];
  icon: P['icon'] | O['icon'];
  'icon.content': O['icon']['content'];
  'icon.font': O['icon']['font'];
  'icon.color': O['icon']['color'];
  'icon.scale': O['icon']['scale'];
  'icon.style': O['icon']['style'];
  'icon.minVisibleSize': O['icon']['minVisibleSize'];
  image: P['image'] | O['image'];
  'image.url': O['image']['url'];
  'image.scale': O['image']['scale'];
  'image.fit': O['image']['fit'];
  'image.tile': O['image']['tile'];
  'image.minVisibleSize': O['image']['minVisibleSize'];
  outline: P['outline'] | O['outline'];
  'outline.enabled': O['outline']['enabled'];
  'outline.color': O['outline']['color'];
  'outline.minVisibleSize': O['outline']['minVisibleSize'];
  text: P['text'] | O['text'];
  'text.content': O['text']['content'];
  'text.font': O['text']['font'];
  'text.color': O['text']['color'];
  'text.size': O['text']['size'];
  'text.scale': O['text']['scale'];
  'text.style': O['text']['style'];
  'text.align': O['text']['align'];
  'text.margin': O['text']['margin'];
  'text.padding': O['text']['padding'];
  'text.backgroundColor': O['text']['backgroundColor'];
  'text.tip': O['text']['tip'];
  'text.minVisibleSize': O['text']['minVisibleSize'];
  'text.scaling': O['text']['scaling'];
  'text.position': O['text']['position'];
  'text.maxLineLength': O['text']['maxLineLength'];
  'text.secondary': O['text']['secondary'];
  'text.secondary.content': O['text']['secondary']['content'];
  'text.secondary.font': O['text']['secondary']['font'];
  'text.secondary.color': O['text']['secondary']['color'];
  'text.secondary.size': O['text']['secondary']['size'];
  'text.secondary.scale': O['text']['secondary']['scale'];
  'text.secondary.style': O['text']['secondary']['style'];
  'text.secondary.align': O['text']['secondary']['align'];
  'text.secondary.margin': O['text']['secondary']['margin'];
  'text.secondary.padding': O['text']['secondary']['padding'];
  'text.secondary.backgroundColor': O['text']['secondary']['backgroundColor'];
  'text.secondary.minVisibleSize': O['text']['secondary']['minVisibleSize'];
  data: any;
  animationDuration: number;
  animationStart: number;
  animationEasing: Easing;
  excluded: 0 | 1;
  virtual: 0 | 1;
  removed: 0 | 1;
  'geo.latitude': number;
  'geo.longitude': number;
  id: ItemId;
  textHidden: 0 | 1;
}
declare type NodeAttributeTypes = NodeAttributesDottedMapping<
  NodeAttributesRequiredObjects,
  NodeAttributesRequiredPrimitives
>;

/**
 * TODO: why this one is here rather than nodeAttributes?
 * TODO: shouldn't we infer this via a custom recursive Required<T> utility?
 */
interface EdgeAttributeTypesTree {
  width: number;
  scalingMethod: string;
  color: Color;
  opacity: number;
  minVisibleSize: number;
  shape: {
    body: EdgeType;
    head: EdgeExtremity | null;
    tail: EdgeExtremity;
    style: EdgeStyle;
  };
  layer: number;
  detectable: boolean;
  curvature: number;
  adjustAnchors: boolean;
  stroke: {
    width: number;
    minVisibleSize: number;
    scalingMethod: string;
    color: Color;
  };
  halo: {
    color: Color | null;
    width: number;
    scalingMethod: string;
  };
  pulse: {
    enabled: boolean;
    duration: number;
    interval: number;
    startColor: Color;
    endColor: Color;
    width: number;
    startRatio: number;
    endRatio: number;
  };
  outline: {
    enabled: boolean;
    color: Color;
    minVisibleSize: number;
  };
  text: {
    content?: string;
    font: string;
    color: Color;
    size: number;
    scale: number;
    style: FontStyle;
    align: TextAlign;
    margin: number;
    padding: number;
    position: EdgeTextPosition;
    backgroundColor: Color;
    minVisibleSize: number;
    scaling: boolean;
    maxLineLength: number;
    adjustAngle: boolean;
    secondary: {
      content?: string;
      font: string;
      color: Color;
      size: number;
      scale: number;
      style: FontStyle;
      align: TextAlign;
      margin: number;
      padding: number;
      backgroundColor: Color;
      minVisibleSize: number;
    };
  };
}

declare type EdgeAttributeTupleTypes =
  | {
      key: ['width'];
      value: 'width';
    }
  | {
      key: ['minVisibleSize'];
      value: 'minVisibleSize';
    }
  | {
      key: ['scalingMethod'];
      value: 'scalingMethod';
    }
  | {
      key: ['color'];
      value: 'color';
    }
  | {
      key: ['opacity'];
      value: 'opacity';
    }
  | {
      key: ['layer'];
      value: 'layer';
    }
  | {
      key: ['detectable'];
      value: 'detectable';
    }
  | {
      key: ['adjustAnchors'];
      value: 'adjustAnchors';
    }
  | {
      key: ['shape'];
      value: 'shape';
    }
  | {
      key: ['shape', 'body'];
      value: 'shape.body';
    }
  | {
      key: ['shape', 'head'];
      value: 'shape.head';
    }
  | {
      key: ['shape', 'tail'];
      value: 'shape.tail';
    }
  | {
      key: ['shape', 'style'];
      value: 'shape.style';
    }
  | {
      key: ['stroke'];
      value: 'stroke';
    }
  | {
      key: ['stroke', 'width'];
      value: 'stroke.width';
    }
  | {
      key: ['stroke', 'color'];
      value: 'stroke.color';
    }
  | {
      key: ['stroke', 'minVisibleSize'];
      value: 'stroke.minVisibleSize';
    }
  | {
      key: ['halo'];
      value: 'halo';
    }
  | {
      key: ['halo', 'color'];
      value: 'halo.color';
    }
  | {
      key: ['halo', 'width'];
      value: 'halo.width';
    }
  | {
      key: ['halo', 'scalingMethod'];
      value: 'halo.scalingMethod';
    }
  | {
      key: ['pulse'];
      value: 'pulse';
    }
  | {
      key: ['pulse', 'enabled'];
      value: 'pulse.enabled';
    }
  | {
      key: ['pulse', 'duration'];
      value: 'pulse.duration';
    }
  | {
      key: ['pulse', 'interval'];
      value: 'pulse.interval';
    }
  | {
      key: ['pulse', 'startColor'];
      value: 'pulse.startColor';
    }
  | {
      key: ['pulse', 'endColor'];
      value: 'pulse.endColor';
    }
  | {
      key: ['pulse', 'width'];
      value: 'pulse.width';
    }
  | {
      key: ['pulse', 'startRatio'];
      value: 'pulse.startRatio';
    }
  | {
      key: ['pulse', 'endRatio'];
      value: 'pulse.endRatio';
    }
  | {
      key: ['outline'];
      value: 'outline';
    }
  | {
      key: ['outline', 'enabled'];
      value: 'outline.enabled';
    }
  | {
      key: ['outline', 'color'];
      value: 'outline.color';
    }
  | {
      key: ['outline', 'minVisibleSize'];
      value: 'outline.minVisibleSize';
    }
  | {
      key: ['text'];
      value: 'text';
    }
  | {
      key: ['text', 'content'];
      value: 'text.content';
    }
  | {
      key: ['text', 'font'];
      value: 'text.font';
    }
  | {
      key: ['text', 'color'];
      value: 'text.color';
    }
  | {
      key: ['text', 'size'];
      value: 'text.size';
    }
  | {
      key: ['text', 'scale'];
      value: 'text.scale';
    }
  | {
      key: ['text', 'style'];
      value: 'text.style';
    }
  | {
      key: ['text', 'position'];
      value: 'text.position';
    }
  | {
      key: ['text', 'margin'];
      value: 'text.margin';
    }
  | {
      key: ['text', 'padding'];
      value: 'text.padding';
    }
  | {
      key: ['text', 'backgroundColor'];
      value: 'text.backgroundColor';
    }
  | {
      key: ['text', 'minVisibleSize'];
      value: 'text.minVisibleSize';
    }
  | {
      key: ['text', 'scale'];
      value: 'text.scale';
    }
  | {
      key: ['text', 'maxLineLength'];
      value: 'text.maxLineLength';
    }
  | {
      key: ['text', 'scaling'];
      value: 'text.scaling';
    }
  | {
      key: ['text', 'adjustAngle'];
      value: 'text.adjustAngle';
    }
  | {
      key: ['text', 'align'];
      value: 'text.align';
    }
  | {
      key: ['text', 'position'];
      value: 'text.position';
    }
  | {
      key: ['text', 'secondary'];
      value: 'text.secondary';
    }
  | {
      key: ['text', 'secondary', 'content'];
      value: 'text.secondary.content';
    }
  | {
      key: ['text', 'secondary', 'font'];
      value: 'text.secondary.font';
    }
  | {
      key: ['text', 'secondary', 'color'];
      value: 'text.secondary.color';
    }
  | {
      key: ['text', 'secondary', 'size'];
      value: 'text.secondary.size';
    }
  | {
      key: ['text', 'secondary', 'scale'];
      value: 'text.secondary.scale';
    }
  | {
      key: ['text', 'secondary', 'style'];
      value: 'text.secondary.style';
    }
  | {
      key: ['text', 'secondary', 'align'];
      value: 'text.secondary.align';
    }
  | {
      key: ['text', 'secondary', 'margin'];
      value: 'text.secondary.margin';
    }
  | {
      key: ['text', 'secondary', 'padding'];
      value: 'text.secondary.padding';
    }
  | {
      key: ['text', 'secondary', 'backgroundColor'];
      value: 'text.secondary.backgroundColor';
    }
  | {
      key: ['text', 'secondary', 'minVisibleSize'];
      value: 'text.secondary.minVisibleSize';
    };
declare type EdgeAttributesKeys = keyof EdgeAttributeTypes;
declare type EdgeAttributesTuplesKeys = EdgeAttributeTupleTypes['key'];
declare type EdgeMappedTupleAttributes<T> = MappedTuple<
  T,
  EdgeAttributeTupleTypes
>['value'];
interface EdgeAttributeSubTreeTypes {
  width: Pick1<EdgeAttributesRequiredObjects, 'width'>;
  scalingMethod: Pick1<EdgeAttributesRequiredObjects, 'scalingMethod'>;
  color: Pick1<EdgeAttributesRequiredObjects, 'color'>;
  opacity: Pick1<EdgeAttributesRequiredObjects, 'opacity'>;
  minVisibleSize: Pick1<EdgeAttributesRequiredObjects, 'minVisibleSize'>;
  layer: Pick1<EdgeAttributesRequiredObjects, 'layer'>;
  detectable: Pick1<EdgeAttributesRequiredObjects, 'detectable'>;
  adjustAnchors: Pick1<EdgeAttributesRequiredObjects, 'adjustAnchors'>;
  shape: Pick1<EdgeAttributesRequiredObjects, 'shape'>;
  'shape.body': Pick2<EdgeAttributesRequiredObjects, 'shape', 'body'>;
  'shape.head': Pick2<EdgeAttributesRequiredObjects, 'shape', 'head'>;
  'shape.tail': Pick2<EdgeAttributesRequiredObjects, 'shape', 'tail'>;
  'shape.style': Pick2<EdgeAttributesRequiredObjects, 'shape', 'style'>;
  stroke: Pick1<EdgeAttributesRequiredObjects, 'stroke'>;
  'stroke.color': Pick2<EdgeAttributesRequiredObjects, 'stroke', 'color'>;
  'stroke.width': Pick2<EdgeAttributesRequiredObjects, 'stroke', 'width'>;
  'stroke.minVisibleSize': Pick2<
    EdgeAttributesRequiredObjects,
    'stroke',
    'minVisibleSize'
  >;
  halo: Pick1<EdgeAttributesRequiredObjects, 'halo'>;
  'halo.color': Pick2<EdgeAttributesRequiredObjects, 'halo', 'color'>;
  'halo.width': Pick2<EdgeAttributesRequiredObjects, 'halo', 'width'>;
  'halo.scalingMethod': Pick2<
    EdgeAttributesRequiredObjects,
    'halo',
    'scalingMethod'
  >;
  pulse: Pick1<EdgeAttributesRequiredObjects, 'pulse'>;
  'pulse.enabled': Pick2<EdgeAttributesRequiredObjects, 'pulse', 'enabled'>;
  'pulse.duration': Pick2<EdgeAttributesRequiredObjects, 'pulse', 'duration'>;
  'pulse.interval': Pick2<EdgeAttributesRequiredObjects, 'pulse', 'interval'>;
  'pulse.startColor': Pick2<
    EdgeAttributesRequiredObjects,
    'pulse',
    'startColor'
  >;
  'pulse.endColor': Pick2<EdgeAttributesRequiredObjects, 'pulse', 'endColor'>;
  'pulse.width': Pick2<EdgeAttributesRequiredObjects, 'pulse', 'width'>;
  'pulse.startRatio': Pick2<
    EdgeAttributesRequiredObjects,
    'pulse',
    'startRatio'
  >;
  'pulse.endRatio': Pick2<EdgeAttributesRequiredObjects, 'pulse', 'endRatio'>;
  outline: Pick1<EdgeAttributesRequiredObjects, 'outline'>;
  'outline.enabled': Pick2<EdgeAttributesRequiredObjects, 'outline', 'enabled'>;
  'outline.color': Pick2<EdgeAttributesRequiredObjects, 'outline', 'color'>;
  'outline.minVisibleSize': Pick2<
    EdgeAttributesRequiredObjects,
    'outline',
    'minVisibleSize'
  >;
  text: Pick1<EdgeAttributesRequiredObjects, 'text'>;
  'text.content': Pick2<EdgeAttributesRequiredObjects, 'text', 'content'>;
  'text.font': Pick2<EdgeAttributesRequiredObjects, 'text', 'font'>;
  'text.color': Pick2<EdgeAttributesRequiredObjects, 'text', 'color'>;
  'text.size': Pick2<EdgeAttributesRequiredObjects, 'text', 'size'>;
  'text.scale': Pick2<EdgeAttributesRequiredObjects, 'text', 'scale'>;
  'text.style': Pick2<EdgeAttributesRequiredObjects, 'text', 'style'>;
  'text.align': Pick2<EdgeAttributesRequiredObjects, 'text', 'align'>;
  'text.margin': Pick2<EdgeAttributesRequiredObjects, 'text', 'margin'>;
  'text.padding': Pick2<EdgeAttributesRequiredObjects, 'text', 'padding'>;
  'text.position': Pick2<EdgeAttributesRequiredObjects, 'text', 'position'>;
  'text.backgroundColor': Pick2<
    EdgeAttributesRequiredObjects,
    'text',
    'backgroundColor'
  >;
  'text.minVisibleSize': Pick2<
    EdgeAttributesRequiredObjects,
    'text',
    'minVisibleSize'
  >;
  'text.adjustAngle': Pick2<
    EdgeAttributesRequiredObjects,
    'text',
    'adjustAngle'
  >;
  'text.scaling': Pick2<EdgeAttributesRequiredObjects, 'text', 'scaling'>;
  'text.maxLineLength': Pick2<
    EdgeAttributesRequiredObjects,
    'text',
    'maxLineLength'
  >;
  'text.secondary': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'content'
  >;
  'text.secondary.content': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'content'
  >;
  'text.secondary.font': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'font'
  >;
  'text.secondary.color': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'color'
  >;
  'text.secondary.size': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'size'
  >;
  'text.secondary.scale': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'scale'
  >;
  'text.secondary.style': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'style'
  >;
  'text.secondary.align': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'align'
  >;
  'text.secondary.margin': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'margin'
  >;
  'text.secondary.padding': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'padding'
  >;
  'text.secondary.backgroundColor': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'backgroundColor'
  >;
  'text.secondary.minVisibleSize': Pick3<
    EdgeAttributesRequiredObjects,
    'text',
    'secondary',
    'minVisibleSize'
  >;
  data: {
    data: any;
  };
  animationDuration: {
    animationDuration: number;
  };
  animationStart: {
    animationStart: number;
  };
  animationEasing: {
    animationEasing: Easing;
  };
  excluded: {
    excluded: 0 | 1;
  };
  virtual: {
    virtual: 0 | 1;
  };
  removed: {
    removed: 0 | 1;
  };
  object: {
    object: Edge;
  };
  id: {
    id: ItemId;
  };
  textHidden: {
    textHidden: 0 | 1;
  };
  source: {
    source: ItemIndex;
  };
  target: {
    target: ItemIndex;
  };
}

/**
 * @public
 */
declare type PredefinedEdgeShape =
  | 'line'
  | 'arrow'
  | 'tapered'
  | 'dashed'
  | 'dotted';
declare type EdgeType = 'line' | 'triangle';
declare type EdgeExtremity =
  | 'arrow'
  | 'circle-hole-arrow'
  | 'triangle-hole-arrow'
  | 'short-arrow'
  | 'sharp-arrow'
  | 'circle'
  | 'square'
  | null;
declare type EdgeStyle = 'plain' | 'dotted' | 'dashed';
interface EdgeShape {
  body?: EdgeType;
  head?: EdgeExtremity;
  tail?: EdgeExtremity;
  style?: EdgeStyle;
}
interface EdgeStroke {
  width?: PixelSize;
  color?: Color | 'inherit';
  minVisibleSize?: number;
}
interface EdgeHalo {
  width?: PixelSize;
  color?: Color | 'inherit';
  scalingMethod?: ScalingMethod;
}
/**
 * This type is used to define other attributes notation
 * Note: this is not just Required<NodeTextStyle> because content is optional
 */
declare type EdgeTextStyleRequired = Required<
  Omit$1<EdgeTextStyle, 'content' | 'secondary'>
> & {
  content?: EdgeTextStyle['content'];
  secondary: Required<Omit$1<SecondaryEdgeTextStyle, 'content'>> & {
    content?: TextContent;
  };
};
/**
 * @public
 * Default values indicate the system values (when an edge has not been assigned any value for that attribute).
 *
 * @property {PixelSize} [width=1]                                        Width of the edge (graph space)
 * @property {ScalingMethod} [scalingMethod="scaled"]                     Indicates if the edge width should be multiplied by the zoom when the edge is displayed.
 * @property {Color|"source"|"target"} [color="grey"]                     Color of the edge
 * @property {OpacityValue} [opacity=1]                                   Opacity of the edge. 0 = transparent, 1 = opaque.
 * @property {LayerValue} [layer=0]                                       Z-index of the node. Integer value between -1 and 3.
 * @property {number} [minVisibleSize=0]                                  If the edge width on screen is less than this value, it will not be displayed
 * @property {boolean} [detectable=true]                                  Indicates if the edge is detectable by the mouse.
 * @property {boolean} [adjustAnchors=true]                               If true, the edge's extremities' badges and shape will be taken into account when displaying it.
 *                                                                        Edges that ends with an arrow will stop at the node's badge/corner.
 *
 * @property {object|PredefinedEdgeShape} [shape]
 * @property {EdgeType} [shape.body="line"]                               Shape of the edge
 * @property {EdgeExtremity} [shape.head=null]                            Head of the edge
 * @property {EdgeExtremity} [shape.tail=null]                            Tail of the edge
 * @property {EdgeStyle} [shape.style="plain"]                            Style of the edge
 *
 * @property {object} [stroke]
 * @property {Color|"inherit"} [stroke.color="inherit"]                   Color of the edge stroke. If it is "inherit", uses the same color as for the body.
 * @property {PixelSize} [stroke.width=0]                                 Stroke width, in pixels.
 * @property {number} [stroke.minVisibleSize=0]                           If the edge width on screen is less than this value, the stroke will not be displayed
 *
 * @property {object|Color} [halo]                                        If not an object, alias to `halo.color`
 * @property {Color} [halo.color=null]                                    Color of the halo
 * @property {PixelSize} [halo.width=10]                                  Width of the halo, in pixels
 * @property {ScalingMethod} [halo.scalingMethod="fixed"]                 Indicates if the halo width should be multiplied by the zoom when the edge is displayed.
 *
 * @property {object}  [pulse]
 * @property {boolean} [pulse.enabled=false]                              If true, shows animated pulse around the edge.
 * @property {number}  [pulse.duration=1000]                              Lifespan of one pulse ripple (milliseconds).
 * @property {number}  [pulse.interval=800]                               Interval between two pulses (milliseconds).
 * @property {Color}   [pulse.startColor="rgba(0, 0, 0, 0.6)"]            Starting color of the pulse
 * @property {Color}   [pulse.endColor="rgba(0, 0, 0, 0)"]                End color of the pulse
 * @property {number}  [pulse.width=50]                                   Width of the pulse in pixels
 * @property {number}  [pulse.startRatio=1]                               Where the pulse starts, relative to the edge width (1 = at the edge border)
 * @property {number}  [pulse.endRatio=2]                                 Where the pulse ends, relative to the edge width (2 = 2x width of the edge)
 *
 * @property {object|boolean} [outline]                                   If not an object, alias to `outline.enabled`
 * @property {boolean} [outline.enabled=false]                            Indicates if the outline should be visible
 * @property {Color} [outline.color="rgba(0, 0, 0, 0.36)"]                Color of the outline
 * @property {number} [outline.minVisibleSize=0]                          If the edge width on screen is less than this value, the outline will ne be shown
 *
 * @property {object|TextContent} [text]                                  If not an object, alias to `text.content`
 * @property {TextContent} [text.content=null]                            Text to display
 * @property {string} [text.font="Arial"]                                 Font used to display the text
 * @property {Color} [text.color="black"]                                 Color of the text
 * @property {PixelSize} [text.size=12]                                   Text size (in pixels)
 * @property {number} [text.scale=1]                                      Text size relative to the edge width
 * @property {boolean} [text.scaling=false]                               Indicates if the `size` property (false) or the `scale` property (true) must be used to compute the text size
 * @property {FontStyle} [text.style="normal"]                              Style applied to the text
 * @property {TextAlign} [text.align="center"]                            Alignment of the text (for multi-line texts)
 * @property {EdgeTextPosition} [text.position="shifted"]                     Text position relative to the edge: centered or shifted. Centered places the text on top of the edge and ignores margin
 * @property {Color|"inherit"} [text.backgroundColor=null]                Background color of the text
 * @property {PixelSize} [text.margin=2]                                  Space between the text and the edge, in pixels. Ignored if `text.position` is "centered".
 * @property {PixelSize} [text.padding=2]                                 Space between the text and its background's edge, in pixels
 * @property {PixelSize} [text.minVisibleSize=4]                          If the edge width on screen is less than this value, the text will not be shown
 * @property {number} [text.maxLineLength=0]                              If > 1, lines that have more characters than this value will be split across multiple lines. Affects both primary and secondary texts.
 * @property {boolean} [text.adjustAngle=true]                            In case the edge is shorter than the text, indicates if the text should be displayed horizontally. Only works for non-scaled texts.
 *
 * @property {object|TextContent} [text.secondary]                        If not an object, alias to `text.secondary.content`
 * @property {TextContent} [text.secondary.content=null]                  Text to display under the primary text
 * @property {string} [text.secondary.font="Arial"]                       Font used to display the secondary text
 * @property {Color} [text.secondary.color="black"]                       Color of the secondary text
 * @property {PixelSize} [text.secondary.size=12]                         Secondary text size (in pixels)
 * @property {number} [text.secondary.scale=0.8]                          Secondary text size (relative to the edge width)
 * @property {FontStyle} [text.secondary.style="normal"]                    Secondary text style
 * @property {TextAlign} [text.secondary.align="center"]                  Alignment of the secondary text (for multi-line texts)
 * @property {Color|"inherit"} [text.secondary.backgroundColor=null]      Background color of the secondary text
 * @property {PixelSize} [text.secondary.margin=2]                        Space between the secondary text and the edge
 * @property {PixelSize} [text.secondary.padding=2]                       Space between the secondary text and its background's edge, in pixels
 * @property {PixelSize} [text.secondary.minVisibleSize=4]                If the edge width on screen is less than this value, the secondary text will not be shown
 *
 * @property {boolean}   [hidden]                                         Alias for `opacity` (`true` -> opacity = 0, `false` -> opacity = 1)
 * @property {PixelSize} [strokeWidth]                                    Alias for `stroke.width`
 */
interface EdgeAttributes {
  width?: PixelSize;
  scalingMethod?: ScalingMethod;
  color?: Color | 'so urce' | 'target';
  opacity?: OpacityValue;
  layer?: LayerValue;
  minVisibleSize?: number;
  detectable?: boolean;
  adjustAnchors?: boolean;
  shape?: EdgeShape | PredefinedEdgeShape;
  stroke?: EdgeStroke;
  halo?: EdgeHalo | Color;
  pulse?: Pulse;
  outline?: Outline | boolean;
  text?: EdgeTextStyle | TextContent;
}
declare type nonPrimitiveEdgeAttributes =
  | 'halo'
  | 'text'
  | 'shape'
  | 'outline'
  | 'stroke'
  | 'pulse';
declare type EdgeAttributesRequiredObjects = Omit$1<
  Required<EdgeAttributes>,
  nonPrimitiveEdgeAttributes
> & {
  stroke: Required<EdgeStroke>;
  halo: Required<EdgeHalo>;
  text: EdgeTextStyleRequired;
  outline: Required<Outline>;
  pulse: Required<Pulse>;
  shape: Required<EdgeShape>;
};
interface EdgeAttributesRequiredPrimitives {
  width: PixelSize;
  scalingMethod: ScalingMethod;
  color: Color | 'source' | 'target';
  opacity: OpacityValue;
  layer: LayerValue;
  minVisibleSize: number;
  detectable: boolean;
  adjustAnchors: boolean;
  shape: PredefinedEdgeShape;
  halo: Color;
  outline: boolean;
  text: TextContent;
}
declare type ObjectMapping =
  | EdgeAttributesRequiredObjects
  | EdgeAttributeTypesTree;
declare type PrimitiveMapping =
  | EdgeAttributesRequiredPrimitives
  | EdgeAttributeTypesTree;
interface EdgeAttributesDottedMapping<
  O extends ObjectMapping,
  P extends PrimitiveMapping
> {
  width: O['width'];
  scalingMethod: O['scalingMethod'];
  color: O['color'];
  opacity: O['opacity'];
  minVisibleSize: O['minVisibleSize'];
  layer: O['layer'];
  detectable: O['detectable'];
  adjustAnchors: O['adjustAnchors'];
  shape: P['shape'] | O['shape'];
  'shape.body': O['shape']['body'];
  'shape.head': O['shape']['head'];
  'shape.tail': O['shape']['tail'];
  'shape.style': O['shape']['style'];
  stroke: O['stroke'];
  'stroke.color': O['stroke']['color'];
  'stroke.width': O['stroke']['width'];
  'stroke.minVisibleSize': O['stroke']['minVisibleSize'];
  halo: P['halo'] | O['halo'];
  'halo.color': O['halo']['color'];
  'halo.width': O['halo']['width'];
  'halo.scalingMethod': O['halo']['scalingMethod'];
  pulse: O['pulse'];
  'pulse.enabled': O['pulse']['enabled'];
  'pulse.duration': O['pulse']['duration'];
  'pulse.interval': O['pulse']['interval'];
  'pulse.startColor': O['pulse']['startColor'];
  'pulse.endColor': O['pulse']['endColor'];
  'pulse.width': O['pulse']['width'];
  'pulse.startRatio': O['pulse']['startRatio'];
  'pulse.endRatio': O['pulse']['endRatio'];
  outline: P['outline'] | O['outline'];
  'outline.enabled': O['outline']['enabled'];
  'outline.color': O['outline']['color'];
  'outline.minVisibleSize': O['outline']['minVisibleSize'];
  text: P['text'] | O['text'];
  'text.content': O['text']['content'];
  'text.font': O['text']['font'];
  'text.color': O['text']['color'];
  'text.size': O['text']['size'];
  'text.scale': O['text']['scale'];
  'text.style': O['text']['style'];
  'text.align': O['text']['align'];
  'text.margin': O['text']['margin'];
  'text.padding': O['text']['padding'];
  'text.position': O['text']['position'];
  'text.backgroundColor': O['text']['backgroundColor'];
  'text.minVisibleSize': O['text']['minVisibleSize'];
  'text.adjustAngle': O['text']['adjustAngle'];
  'text.scaling': O['text']['scaling'];
  'text.maxLineLength': O['text']['maxLineLength'];
  'text.secondary': O['text']['secondary']['content'];
  'text.secondary.content': O['text']['secondary']['content'];
  'text.secondary.font': O['text']['secondary']['font'];
  'text.secondary.color': O['text']['secondary']['color'];
  'text.secondary.size': O['text']['secondary']['size'];
  'text.secondary.scale': O['text']['secondary']['scale'];
  'text.secondary.style': O['text']['secondary']['style'];
  'text.secondary.align': O['text']['secondary']['align'];
  'text.secondary.margin': O['text']['secondary']['margin'];
  'text.secondary.padding': O['text']['secondary']['padding'];
  'text.secondary.backgroundColor': O['text']['secondary']['backgroundColor'];
  'text.secondary.minVisibleSize': O['text']['secondary']['minVisibleSize'];
  data: any;
  animationDuration: number;
  animationStart: number;
  animationEasing: Easing;
  excluded: 0 | 1;
  virtual: 0 | 1;
  removed: 0 | 1;
  source: ItemIndex;
  target: ItemIndex;
  id: ItemId;
  textHidden: 0 | 1;
}
declare type EdgeAttributeTypes = EdgeAttributesDottedMapping<
  EdgeAttributesRequiredObjects,
  EdgeAttributesRequiredPrimitives
>;

/**
 * @public
 */
declare type PropertyPath = string | string[];
interface DataChange {
  property: PropertyPath | null;
  previousValues: any[];
  newValues: any[];
}
interface NodesDataChange<ND = any> extends DataChange {
  nodes: NodeList<ND>;
}
interface EdgesDataChange<ED = any> extends DataChange {
  edges: EdgeList<ED>;
}
interface DataEvent {
  isNode: boolean;
}
interface NodesDataEvent<ND = any> extends DataEvent {
  nodes: NodeList<ND>;
  changes: NodesDataChange<ND>[];
}
interface EdgesDataEvent<ED = any> extends DataEvent {
  edges: EdgeList<ED>;
  changes: EdgesDataChange<ED>[];
}

interface Neo4JEdgeData<Props = Record<string, unknown>> {
  neo4jType?: string;
  neo4jProperties: Props;
}
interface Neo4JNodeData<Props = Record<string, unknown>> {
  neo4jLabels: string[];
  neo4jProperties: Props;
}

interface Point {
  x: number;
  y: number;
}
interface Size {
  width: number;
  height: number;
}
/**
 * @public
 */
declare type NodeId = string | number;
/**
 * @public
 */
declare type EdgeId = string | number;
declare type Direction = 'in' | 'out' | 'both';
/**
 * Edge direction
 * @public
 */
declare type EdgeDirection = Direction;
/**
 * @public
 * "visible" refers to visible element, "raw" refers to elements that are not the result of a transformation (the
 * "original" graph), and "all" refers to all elements, including the non-visible ones.
 */
declare type Filter = 'visible' | 'raw' | 'all' | /* @internal */ '_all';
/**
 * @public
 * @property {NodeId} [id]
 * @property {NodeAttributes} [attributes]
 * @property {any} [data]
 */
interface RawNode<T = any> {
  id?: NodeId;
  attributes?: NodeAttributes;
  data?: T;
}
/**
 * @public
 * @property {EdgeId} [id]
 * @property {NodeId} source
 * @property {NodeId} target
 * @property {EdgeAttributes} [attributes]
 * @property {any} [data]
 */
interface RawEdge<T = any> {
  id?: EdgeId;
  source: NodeId;
  target: NodeId;
  attributes?: EdgeAttributes;
  data?: T;
}
declare type RawItem$1<T> = RawNode<T> | RawEdge<T>;
/**
 * @public
 * @property {Array<RawNode>} nodes
 * @property {Array<RawEdge>} edges
 */
interface RawGraph<T = any, U = any> {
  nodes: RawNode<T>[];
  edges: RawEdge<U>[];
}
/**
 *
 * @public
 *
 *
 *
 * @class Node
 * @property {boolean} isNode Read-only property that is always `true`.
 *
 * @class Edge
 * @property {boolean} isNode Read-only property that is always `false`.
 *
 * @class NodeList
 * @property {boolean} isNode Read-only property that is always `true`.
 * @property {number} size Read-only property that indicates the number of nodes in the list.
 *
 * @class EdgeList
 * @property {boolean} isNode Read-only property that is always `false`.
 * @property {number} size Read-only property that indicates the number of edges in the list.
 *
 */
declare type AttributeNestedValue<T, U> = Exclude<
  Extract<T, object>,
  Function
> extends object
  ?
      | ((item?: U, ctx?: unknown) => Exclude<T, Function>)
      | {
          [K in keyof T]: AttributeNestedValue<T[K], U>;
        }
  : T | ((item?: U, ctx?: unknown) => T | undefined);
declare type NodeAttributesValue<ND, ED> = {
  [K in keyof NodeAttributes]: AttributeNestedValue<
    NodeAttributes[K],
    Node$1<ND, ED>
  >;
};
declare type EdgeAttributesValue<ED, ND> = {
  [K in keyof EdgeAttributes]: AttributeNestedValue<
    EdgeAttributes[K],
    Edge<ED, ND>
  >;
};
declare type AdjacencyPolicy = 'union' | 'include-sources' | 'exclude-sources';
declare type NodeCollection<ND = any, ED = any> =
  | Node$1<ND, ED>
  | NodeList<ND, ED>
  | NodeId
  | Node$1<ND, ED>[]
  | NodeId[];
declare type EdgeCollection<ED = any, ND = any> =
  | Edge<ED, ND>
  | EdgeList<ED, ND>
  | EdgeId
  | Edge<ED, ND>[]
  | EdgeId[];
/**
 * @public
 *
 * @property {"both"|"in"|"out"} [options.direction="both"] Direction of the edges to follow.
 * @property {Filter} [options.filter="visible"] Indicates what kind of elements should be retrieved.
 * @property {"union"|"include-sources"|"exclude-sources"} [options.policy="union"]
 * If "include-sources", the source node(s) will be added to the result.
 * If "exclude-sources", the source node(s) will be removed from the result.
 * If "union", the result is not modified.
 * This parameter is ignored when retrieving adjacent edges.
 * @property {boolean} [options.bothExtremities=false] Relevant only for `getAdjacentEdges`. If `true`, only edges for
 * which both extremities are in the `NodeList` are retrieved.
 */
interface AdjacencyOptions {
  direction?: EdgeDirection;
  filter?: Filter;
  policy?: AdjacencyPolicy;
  bothExtremities?: boolean;
}
/**
 * @public
 */
declare type Easing =
  | 'linear'
  | 'quadraticIn'
  | 'quadraticOut'
  | 'quadraticInOut'
  | 'cubicIn'
  | 'cubicOut'
  | 'cubicInOut';
declare type EasingFunction = Easing | ((x: number) => number);
declare type RendererType = 'webgl' | 'canvas' | 'svg' | null;
/**
 * Indicates a renderer state. <br>
 * <code>"requested"</code> is fired right after Ogma is initialized or the
 * `renderer` option has been changed, and means that the renderer has not been
 * initialized yet.
 *   * `ok`: the renderer has been initialized and runs properly.
 *   * `error`: an error has occurred that prevents the renderer from running.
 */
declare type RendererState = 'requested' | 'ok' | 'error';
/**
 * A non-null value indicates that an error has occurred and provides information
 * on that error.
 *  * `NO_WEBGL`: WebGL is not available, most likely a browser or GPU issue.
 *  * `NO_ANGLE_INSTANCED_ARRAYS`: <a href="https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays">ANGLE_instanced_arrays</a> WebGL extension is not
 * available. Also most likely a browser or GPU issue.
 *  * `OTHER`: unexpected error, most likely due to a specific combination of
 * browser/GPU/OS that was not handled correctly by Ogma. If you happen to
 * encounter this error code , please contact support@linkurio.us and provide
 * the error message along with the browser, operating system and graphics card
 * used.
 */
declare type RendererErrorCode =
  | 'NO_WEBGL'
  | 'NO_ANGLE_INSTANCED_ARRAYS'
  | 'OTHER'
  | null;
interface RenderStateInfo {
  type: RendererType;
  state: RendererState;
  code: RendererErrorCode;
  message: string;
}
/**
 * @public
 * it specifies the `duration` property.
 * @param {number}  [duration=0]      Indicates the duration of the attribute
 * transition, in milliseconds.
 * @param {Easing}  [easing="linear"] Indicates the animation easing
 */
declare type AttributeAnimationOptions =
  | {
      duration: number;
      easing?: Easing;
    }
  | number;
declare type CrossOriginValue = 'anonymous' | 'use-credentials' | null;
/**
 * @public
 * Indicates a size in pixels. A string in the format `X%` (e.g "200%") can be
 * specified instead of a number, in which case it is treated as `X percent of
 * the default value`. `X` should be parsable using `parseFloat`.
 */
declare type PixelSize = number | string;
/**
 * @public
 * rgb(a) notation (e.g: `"rgb(128, 128, 128)"` or `"rgba(128, 128, 128, 0.2)"`),
 * hexadecimal notation (e.g: `"#FFFFFF"`) or `null` (transparent).
 */
declare type Color = string | null;
/**
 * @public
 */
declare type TextContent = string | number | null;
/**
 * @public
 */
declare type FontStyle = 'none' | 'bold' | 'italic' | 'normal';
/**
 * @public
 */
declare type TextAlign = 'left' | 'center';
/**
 * @public
 */
declare type EdgeTextPosition = 'shifted' | 'centered';
/**
 * @public
 */
declare type TextPosition = 'right' | 'left' | 'top' | 'bottom' | 'center';
/**
 * @public
 */
declare type ScalingMethod = 'scaled' | 'fixed';
/**
 * @public
 * elements are on the layer 0. Selected elements are on the layer 2. Hovered
 * elements are on the layer 3.
 *
 * indicating the opacity of the node/edge. Note that Ogma doesn't perform real
 * opacity, but background blending: the lower the opacity value is, the more
 * the color of the node/edge is blended towards the background color, but it
 * retains its original alpha value. This has one important implication: when
 * using a transparent background and an image is displayed behind Ogma, it is
 * necessary to set the RGB values to the background color that are close to the
 * image, even if the color is transparent. For example, assuming the image is
 * mainly grey, you should do `ogma.setOptions({backgroundColor: "rgba(128, 128, 128, 0)"})`
 * so the nodes/edges are nicely blended towards the image color. */
declare type LayerValue = number;
declare type OpacityValue = number;
/**
 * @public
 * Used to indicate if a style rule should be applied to a given node. `null`
 * is equivalent to a function that always returns true.
 */
declare type NodeSelector<ND, ED> = (node: Node$1<ND, ED>) => boolean | null;
/**
 * @public
 * Used to indicate if a style rule should be applied to a given edge. `null`
 * is equivalent to a function that always returns true.
 */
declare type EdgeSelector<ED, ND> = (edge: Edge<ED, ND>) => boolean | null;
/**
 * @public
 * depends on the existence of the node(s)/edge(s), but not on their attributes
 * @property {"all"|Array<PropertyPath>} [attributes] List of attributes the
 * rule/class depends on
 * @property {boolean} [data] Indicates if the result of the rule is based on
 * the node/edge's data
 * @property {boolean} [selection] Indicates if the result of the rule changes
 * depending on whether the node/edge is selected or not
 * @property {boolean} [hover] Indicates if the result of the rule changes
 * depending on whether the node/edge is hovered or not
 */
declare type Dependency =
  | true
  | {
      attributes?: 'all' | PropertyPath[];
      data?: boolean;
      selection?: boolean;
      hover?: boolean;
    };
/**
 * @public
 * If `null`, indicates that the node attributes defined by the rule/class does
 * not depend on any attribute of any node/edge.
 * If unspecified, the `self`, `adjacentNodes` and `adjacentEdges` fields are
 * treated as `{attributes: "all", data: true, selection: true, hover: false}`,
 * and the `allNodes` and `allEdges` fields are treated as `null`.
 * @property {Dependency} [self] Indicates that the rule/class for that node
 * should be updated when the specified attributes of the node change
 * @property {Dependency} [adjacentNodes] Indicates that the rule/class for that
 * node should be updated when the specified attributes of the node's adjacent
 * nodes change
 * @property {Dependency} [adjacentEdges] Indicates that the rule/class for that
 * node should be updated when the specified attributes of the node's adjacent
 * edges change
 * @property {Dependency} [allNodes] Indicates that the rule/class for that node
 * should be updated when the specified attributes of any node change
 * @property {Dependency} [allEdges] Indicates that the rule/class for that node
 * should be updated when the specified attributes of any edge change
 */
interface NodeDependencies {
  self?: Dependency;
  adjacentNodes?: Dependency;
  adjacentEdges?: Dependency;
  allNodes?: Dependency;
  allEdges?: Dependency;
}
/**
 * @public
 * If `null`, indicates that the edge attributes defined by the rule/class does
 * not depend on any attribute of any node/edge.
 * If unspecified, the `self`, `extremities` and `parallelEdges` fields are
 * treated as `{attributes: "all", data: true, selection: true, hover: false}`,
 * and the `allNodes` and `allEdges` fields are treated as `null`.
 * @property {Dependency} [self] Indicates that the rule/class for that edge
 * should be updated when the specified attributes of the edge change
 * @property {Dependency} [extremities] Indicates that the rule/class for that
 * edge should be updated when the specified attributes of the edge's
 * extremities change
 * @property {Dependency} [parallelEdges] Indicates that the rule/class for
 * that edge should be updated when the specified attributes of the node's
 * parallel edges change
 * @property {Dependency} [allNodes] Indicates that the rule/class for that
 * edge should be updated when the specified attributes of any node change
 * @property {Dependency} [allEdges] Indicates that the rule/class for that
 * edge should be updated when the specified attributes of any edge change
 */
interface EdgeDependencies {
  self?: Dependency;
  extremities?: Dependency;
  parallelEdges?: Dependency;
  allNodes?: Dependency;
  allEdges?: Dependency;
}
/**
 * @public
 * If unspecified, the assigned attributes are inferred to the best possible
 * extent from the `NodeAttributesValue` value.
 * @property {"all"|Array<PropertyPath>} [attributes] List of node attributes
 * assigned by the rule/class
 */
declare type NodeOutput = null | {
  attributes?: 'all' | PropertyPath[];
};
/**
 * @public
 * If unspecified, the assigned attributes are inferred to the best possible
 * extent from the `EdgeAttributesValue` value.
 * @property {"all"|Array<PropertyPath>} [attributes] List of edge attributes
 * assigned by the rule/class
 */
declare type EdgeOutput = null | {
  attributes?: 'all' | PropertyPath[];
};
declare type MappedTuple<T, K> = Extract<
  K,
  {
    key: T;
  }
>;
declare type Pick1<T, U extends keyof T> = Pick<T, U>;
declare type Pick2<T, L1 extends keyof T, L2 extends keyof T[L1]> = {
  [K1 in L1]: {
    [K2 in L2]: T[K1][K2];
  };
};
declare type Pick3<
  T,
  L1 extends keyof T,
  L2 extends keyof T[L1],
  L3 extends keyof T[L1][L2]
> = {
  [K1 in L1]: {
    [K2 in L2]: {
      [K3 in L3]: T[K1][K2][K3];
    };
  };
};
declare type Pick4<
  T,
  L1 extends keyof T,
  L2 extends keyof T[L1],
  L3 extends keyof T[L1][L2],
  L4 extends keyof T[L1][L2][L3]
> = {
  [K1 in L1]: {
    [K2 in L2]: {
      [K3 in L3]: {
        [K4 in L4]: T[K1][K2][K3][K4];
      };
    };
  };
};
declare type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
declare type Omit$1<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface AnimationInformation {
  duration: number;
  start: number;
  easing: Easing;
}

interface NodeJSONOptions {
  attributes?: NodeAttributesKeys[] | 'all';
  data?: (data: any) => any;
}
interface EdgeJSONOptions {
  attributes?: EdgeAttributesKeys[] | 'all';
  data?: (data: any) => any;
}

/**
 * @param {object} [options]
 * @param {number} [options.number=1] Number of pulses
 * @param {number} [options.duration=1000] Duration of a pulse (milliseconds)
 * @param {number} [options.interval=800] Interval between two pulses (milliseconds)
 * @param {Color|"inherit"} [options.startColor="rgb(0,0,0,0.6)"] Starting color of the pulse
 * @param {Color|"inherit"} [options.endColor="rgb(0,0,0,0.0)"]   Ending color of the pulse
 * @param {number} [options.width=50] Width of the pulse in pixels
 * @param {number} [options.startRatio=1] Where the pulse starts, relative to the node siz (1 = at the node's border)
 * @param {number} [options.endRatio=2] Where the pulse ends, relative to the node siz (1 = at the node's border)
 */
interface PulseOptions {
  number?: number;
  duration?: number;
  interval?: number;
  startColor?: Color | 'inherit';
  endColor?: Color | 'inherit';
  width?: number;
  startRatio?: number;
  endRatio?: number;
}

/**
 * @public
 * @property {number} minX          Minimum X coordinate of the bounding box
 * @property {number} maxX          Maximum X coordinate of the bounding box
 * @property {number} minY          Minimum Y coordinate of the bounding box
 * @property {number} maxY          Maximum Y coordinate of the bounding box
 * @property {number} maxScaledSize Maximum scaled size of the elements used to compute the bounding box
 * @property {number} minScaledSize Minimum scaled size of the elements used to compute the bounding box
 * @property {number} maxFixedSize  Maximum fixed size of the elements used to compute the bounding box
 * @property {number} minFixedSize  Minimum fixed size of the elements used to compute the bounding box
 * @property {number} cx            X coordinate of the center of the bounding box
 * @property {number} cy            Y coordinate of the center of the bounding box
 * @property {number} width         Width of the bounding box
 * @property {number} height        Height of the bounding box
 * @property {function(zoom: number):BoundingBox} computeForZoom Method to include the maximum item
 * sizes to compute the real boundaries at the selected zoom level
 */
/**
 *
 * @public
 */
interface SimpleBoundingBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width?: number;
  height?: number;
  cx?: number;
  cy?: number;
}
declare class BoundingBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  minScaledSize: number;
  maxScaledSize: number;
  minFixedSize: number;
  maxFixedSize: number;
  cx: number;
  cy: number;
  width: number;
  height: number;
  computeForZoom(zoom: number): BoundingBox;
}

declare class APIModule<N, E> {}

declare type CursorStyle =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out'
  | 'grab'
  | 'grabbing';

/**
 * @public
 * `"shift"|"ctrl"|"cmd"|"alt"|"space"|"enter"|"esc"|"del"|"backspace"`.
 */
declare type ModifierKey =
  | 'shift'
  | 'ctrl'
  | 'cmd'
  | 'alt'
  | 'space'
  | 'enter'
  | 'esc'
  | 'del'
  | 'backspace';
declare type KeyCode = number;
declare type KeyName = string | ModifierKey;
declare class KeyboardAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.keyboard.isKeyPressed
   * Indicates if the specified key is pressed.
   * @param {KeyName|KeyCode} key Key name or key code indicating the key to
   * check.
   * @return {boolean}
   */
  isKeyPressed: (key: KeyName | KeyCode) => boolean;
  /**
   * @method Ogma.keyboard.resetKeys
   * Resets the stored values for the keys that the user has pressed. Useful to
   * ensure that after a certain shortcut the next combination will be detected
   * properly, even if the user made a mistake. Also use it in the browsers
   * which do not report loss of focus when a dialog window is open.
   */
  resetKeys: () => void;
}

interface FilterOptionDuringAction {
  hideNodes?: boolean;
  hideEdges?: boolean;
  hideNodeTexts?: boolean;
  hideEdgeTexts?: boolean;
}
interface Options {
  detect?: {
    nodes?: boolean;
    edges?: boolean;
    nodeTexts?: boolean;
    edgeTexts?: boolean;
    nodeErrorMargin?: number;
    edgeErrorMargin?: number;
  };
  interactions?: {
    drag?: {
      enabled?: boolean;
      cursor?: CursorStyle;
    };
    selection?: {
      enabled?: boolean;
      multiSelectionKey?: KeyName | null;
    };
    zoom?: {
      enabled?: boolean;
      onDoubleClick?: boolean;
      duration?: number;
      modifier?: number;
      minValue?: null | ZoomBoundaryFunction;
      maxValue?: null | ZoomBoundaryFunction;
      easing?: Easing | ((t: number) => number);
    } & FilterOptionDuringAction;
    pan?: {
      enabled?: boolean;
    } & FilterOptionDuringAction;
    rotation?: {
      enabled?: boolean;
    } & FilterOptionDuringAction;
    gesture?: {
      enabled?: boolean;
    } & FilterOptionDuringAction;
  };
  cursor?: {
    default?: CursorStyle;
    node?: CursorStyle;
    edge?: CursorStyle;
  };
  backgroundColor?: Color;
  renderer?: RendererType;
  imgCrossOrigin?: CrossOriginValue;
  texts?: {
    preventOverlap?: boolean;
    hideUntilFontsLoaded?: boolean;
  };
  mouse?: {
    enabled?: boolean;
    wheelEnabled?: boolean;
    disableWheelUntilMouseDown?: boolean;
    doubleClickTimer?: number;
  };
  touch?: {
    enabled?: boolean;
  };
  minimumWidth?: number;
  minimumHeight?: number;
  edgesAlwaysCurvy?: boolean;
  directedEdges?: boolean;
  transformations?: {
    updateOnDataChange?: boolean;
  };
}
/**
 * @public
 * @property {number} smallestNodeSize Diameter of the smallest node (graph space)
 * @property {number} biggestNodeSize Diameter of the biggest node (graph space)
 * @property {number} graphWidth Width of the graph (graph space)
 * @property {number} graphHeight Height of the graph (graph space)
 * @property {number} viewWidth Width of the view (pixels)
 * @property {number} graphHeight Height of the view (pixels)
 */
interface ZoomLevelData {
  smallestNodeSize: number;
  biggestNodeSize: number;
  graphWidth: number;
  graphHeight: number;
  viewWidth: number;
  viewHeight: number;
}

/**
 * @public
 * @property {number}             [duration=0]              Duration of the camera movement, in milliseconds.
 * @property {EasingFunction}     [easing="quadraticInOut"] Easing function applied to the movement of the camera.
 * @property {boolean}            [ignoreZoomLimits=false]  If `true`, the options `interactions.zoom.minValue` and
 *                                                          `interactions.zoom.maxValue` are ignored.
 * @property {number}             [maxNodeSizeOnScreen=200] Additional restriction on the zoom that makes sure no node
 *                                                          is displayed with a diameter greater than this value, in pixels.
 *                                                          Set to 0 to disable this feature.
 * @property {object|number}      [padding]                 If a number, indicates the padding for the four sides.
 * @property {number}             [padding.top=40]          Top padding (in pixels).
 * @property {number}             [padding.bottom=40]       Bottom padding (in pixels).
 * @property {number}             [padding.left=40]         Left padding (in pixels).
 * @property {number}             [padding.right=40]        Right padding (in pixels).
 */
interface LocateOptions {
  duration?: number;
  easing?: Easing;
  ignoreZoomLimits?: boolean;
  maxNodeSizeOnScreen?: number;
  padding?:
    | number
    | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      };
}
/**
 * @public
 * This type of functions is passed to the Ogma options to define how to treat
 * the interactive zoom level depending on the node size range, graph extent
 * and the canvas size.
 */
declare type ZoomBoundaryFunction = (params: ZoomLevelData) => number;
/**
 * @extends Options.interactions
 * @property {object}               [zoom]
 * @property {boolean}              [zoom.enabled=true] Indicates if zoom on mouse wheel should be enabled.
 * @property {boolean}              [zoom.onDoubleClick=false] Indicates if zoom on double click should be enabled.
 * @property {number}               [zoom.duration=150] Indicate the duration of a manual zoom.
 * @property {number}               [zoom.modifier=1.8] Indicate the zoom multiplier on the manual zoom.
 * @property {null|ZoomBoundaryFunction} [zoom.minValue]
 * Function indicating the minimum possible zoom. By default, it's not possible to zoom so the graph takes less
 * than 20% of the view. Set to `null` to remove the limit.
 * @property {null|ZoomBoundaryFunction} [zoom.maxValue]
 * Function indicating the maximum possible zoom. By default, it's not possible to zoom so the smallest node takes
 * more than 50% of the view. Set to `null` to remove the limit.
 * @property {EasingFunction}       [zoom.easing="quadraticOut"] Easing function to use for the zoom.
 * @property {boolean}              [zoom.hideNodes=false] Indicates if the nodes should be hidden when zooming manually.
 * @property {boolean}              [zoom.hideEdges=false] Indicates if the edges should be hidden when zooming manually.
 * @property {boolean}              [zoom.hideNodeTexts=false] Indicates if the node texts should be hidden when zooming manually.
 * @property {boolean}              [zoom.hideEdgeTexts=false] Indicates if the edge texts should be hidden when zooming manually.
 */
/**
 * @extends Options.interactions
 * @property {object}   [pan]
 * @property {boolean}  [pan.enabled=true] Indicates if moving the view with the mouse should be enabled.
 * @property {boolean}  [pan.hideNodes=false] Indicates if the nodes should be hidden when moving the view.
 * @property {boolean}  [pan.hideEdges=false] Indicates if the edges should be hidden when moving the view.
 * @property {boolean}  [pan.hideNodeTexts=false] Indicates if the node texts should be hidden when moving the view.
 * @property {boolean}  [pan.hideEdgeTexts=false] Indicates if the edge texts should be hidden when moving the view.
 */
/**
 * @extends Options.interactions
 * @property {object}   [rotation]
 * @property {boolean}  [rotation.enabled=true] Indicates if rotating the view with the mouse should be enabled.
 * @property {boolean}  [rotation.hideNodes=false] Indicates if the nodes should be hidden when rotating the view.
 * @property {boolean}  [rotation.hideEdges=false] Indicates if the edges should be hidden when rotating the view.
 * @property {boolean}  [rotation.hideNodeTexts=false] Indicates if the node texts should be hidden when rotating the view.
 * @property {boolean}  [rotation.hideEdgeTexts=false] Indicates if the edge texts should be hidden when rotating the view.
 */
/**
 * @extends Options.interactions
 * @property {object}   [gesture]
 * @property {boolean}  [gesture.enabled=true] Indicates if zooming/rotating using two fingers should be enabled.
 * @property {boolean}  [gesture.hideNodes=false] Indicates if the nodes should be hidden when zooming/rotating the view using two fingers.
 * @property {boolean}  [gesture.hideEdges=false] Indicates if the edges should be hidden when zooming/rotating the view using two fingers.
 * @property {boolean}  [gesture.hideNodeTexts=false] Indicates if the node texts should be hidden when zooming/rotating the view using two fingers.
 * @property {boolean}  [gesture.hideEdgeTexts=false] Indicates if the edge texts should be hidden when zooming/rotating the view using two fingers.
 */
/**
 * @public
 * @property {number} x
 * @property {number} y
 * @property {number} zoom
 * @property {number} angle
 *
 * @property {number} [duration=0] Duration of the animation, in milliseconds.
 * @property {EasingFunction} [easing="linear"] Easing used by the animation.
 * @property {boolean} [ignoreZoomLimits=false]
 * If `false`, the options `interactions.zoom.minValue` and `interactions.zoom.maxValue` are ignored.
 * @property {number} [startAfter=0] Advanced usage. Number from 0 to 1 indicating after which percentage of the duration the animation must be started. For example,
 *                                   specifying 0.5 would cause the animation to start after half of its total duration, and to be played
 *                                   two times faster as a consequence.
 */
interface CameraAnimationOptions {
  duration?: number;
  easing?: EasingFunction;
  ignoreZoomLimits?: boolean;
  startAfter?: number;
}
interface View {
  x?: number;
  y?: number;
  zoom?: number;
  angle?: number;
  width?: number;
  height?: number;
}
declare class ViewAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.view.setZoom
   * Set the zoom level.
   * @param {number} zoom
   * @param {CameraAnimationOptions} [options]
   * @return {Promise<void>}
   */
  setZoom: (
    zoom: number,
    options?: CameraAnimationOptions | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.zoomIn
   * Multiply the current zoom level by the specified amount.
   * If geo mode is on, it will fall back to `ogma.geo.setZoom` and use the zoom modifier defined by the projection.
   * @param {number|CameraAnimationOptions} [modifier] If not specified, uses the value used for manual (mouse wheel zoom.
   * @param {CameraAnimationOptions} [options]
   * @return {Promise<void>}
   */
  zoomIn: (
    modifier: number | Partial<CameraAnimationOptions>,
    options?: Partial<CameraAnimationOptions> | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.zoomOut
   * Divide the current zoom level by the specified amount.
   * If geo mode is on, it will fall back to `ogma.geo.setZoom` and use the zoom modifier defined by the projection.
   * @param {number|CameraAnimationOptions} [modifier] If not specified, uses the value used for manual (mouse wheel) zoom.
   * @param {CameraAnimationOptions} [options]
   * @return {Promise<void>}
   */
  zoomOut: (
    modifier: number | Partial<CameraAnimationOptions>,
    options?: Partial<CameraAnimationOptions> | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.getZoom
   * Indicates the current zoom level.
   * @return {number}
   */
  getZoom: () => number;
  /**
   * @method Ogma.view.setCenter
   * Set the center of the view, in graph coordinates.
   * @param {{x: number, y: number}} center
   * @param {CameraAnimationOptions} [options]
   * @return {Promise<void>}
   */
  setCenter: (
    center: Point,
    options?: CameraAnimationOptions | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.move
   * Move the center of the view by the specified amount of pixels (NOT graph coordinates).
   * @param {{x: number, y: number}} offset
   * @param {CameraAnimationOptions} [options]
   * @return {Promise<void>}
   */
  move: (
    offset: Point,
    options?: CameraAnimationOptions | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.moveToBounds
   * Animates the view to the bounding box. If you don't provide the
   * `duration` option, the optimal animation duration is used based on the
   * translation distance.
   *
   * @param {BoundingBox | [number, number, number, number]} target It can be a `BoundingBox` or an Array of `minX`, `minY`, `maxX`, `maxY` in graph coordinates
   * @param {CameraAnimationOptions} [options] For duration and easing
   * @return {Promise<void>}
   *
   * @example
   * ogma.view.moveToBounds(
   *   ogma.getNodes(['id1', 'id2']).getBoundingBox(),
   * ).then(() => console.log('id1 and id2 are in view');
   */
  moveToBounds: (
    target: BoundingBox | [number, number, number, number],
    options?: CameraAnimationOptions | undefined
  ) => Promise<unknown>;
  /**
   * @method Ogma.view.moveTo
   * Smoothly animate to the particular view. If you don't provide the
   * `duration` option, the optimal animation duration is used based on the
   * translation distance.
   *
   * @param {object} view
   * @param {number} view.x X coordinate of the center of the view.
   * @param {number} view.y Y coordinate of the center of the view.
   * @param {number} view.zoom Zoom level of the view.
   * @param {CameraAnimationOptions} [options] For duration and easing
   * @return {Promise<void>}
   *
   * @example
   * ogma.view.moveTo({ x: 10, y: 20, zoom: 5 })
   *   .then(() => console.log('zoomed on view'));
   */
  moveTo: (
    target: Required<Pick<View, 'x' | 'y' | 'zoom'>>,
    options?: CameraAnimationOptions | undefined
  ) => Promise<unknown>;
  /**
   * @method Ogma.view.getCenter
   * Indicates the center of the view.
   * @return {{x: number, y: number}}
   */
  getCenter: () => Point;
  /**
   * @method Ogma.view.setAngle
   * Set the angle of the view.
   * @param {number} angle Angle, in radians.
   * @param {CameraAnimationOptions} [options]
   * @return {Promise<void>}
   */
  setAngle: (
    angle: number,
    options?: CameraAnimationOptions | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.rotate
   * Rotate the view by the specified angle.
   * @param {number} angle Angle, in radians.
   * @param {CameraAnimationOptions} [options]
   * @return {Promise<void>}
   */
  rotate: (
    angle: number,
    options?: CameraAnimationOptions | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.getAngle
   * Indicates the current angle of the view.
   * @return {number} Angle, in radians.
   */
  getAngle: () => number;
  /**
   * @method Ogma.view.set
   * Set the view.
   * @param {object} view
   * @param {number} [view.x] X coordinate of the center of the view.
   * @param {number} [view.y] Y coordinate of the center of the view.
   * @param {number} [view.zoom] Zoom level of the view.
   * @param {number} [view.angle] Angle of the view, in radians.
   * @param {CameraAnimationOptions} [options]
   * @return {Promise<void>}
   */
  set: (
    view: Partial<View>,
    options?: CameraAnimationOptions | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.get
   * Retrieve the current view.
   * @return {{x: number, y: number, zoom: number, angle: number, width: number, height: number}}
   */
  get: () => Required<View>;
  /**
   * @method Ogma.view.graphToScreenCoordinates
   * Returns a position on the screen from graph coordinates (e.g a node's position).
   * @param {{x: number, y: number}} coordinates
   * @return {{x: number, y: number}}
   */
  graphToScreenCoordinates: (coordinates: Point) => Point;
  /**
   * @method Ogma.view.screenToGraphCoordinates
   * Returns graph coordinates from a position on the screen.
   * @param {{x: number, y: number}} coordinates
   * @return {{x: number, y: number}}
   */
  screenToGraphCoordinates: (coordinates: Point) => Point;
  /**
   * @method Ogma.view.getImageData
   * Returns a new [`ImageData`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData), containing the pixels
   * that are displayed by the current renderer. If the current renderer is not canvas or WebGL, the method returns
   * `null`.
   *
   * If the screen has a pixel density greater than one (for example, retina screen), the retrieved ImageData will
   * not be rescaled and will have a bigger width and height than the view.
   *
   * Note: since it's simply copying pixels, this method is way faster than an image export
   * (`ogma.export.png()` for example).
   *
   * @returns {Promise<ImageData|null>}
   */
  getImageData: () => Promise<ImageData | null>;
  /**
   * @method Ogma.view.getElementAt
   * Returns the element located at the specified screen coordinates.
   * @param {object} pos
   * @param {number} pos.x
   * @param {number} pos.y
   * @return {Node|Edge|null}
   */
  getElementAt: (pos: Point) => Node$1<ND, ED> | Edge<ED, ND> | null;
  /**
   * @method Ogma.view.getElementsInside
   * Returns elements inside of the rectangle defined by the screen coordinates.
   * @param {number} xmin X coordinate of the bottom left corner
   * @param {number} ymin Y coordinate of the bottom left corner
   * @param {number} xmax X coordinate of the top right corner
   * @param {number} ymax Y coordinate of the top right corner
   * @param {boolean = true} convertToScreenCoordinates Wether or not the function will convert the coordinates
   * to screen space before running the query
   * @return {{ nodes: NodeList, edges: EdgeList }}
   */
  getElementsInside: (
    xmin: number,
    ymin: number,
    xmax: number,
    ymax: number,
    convertToScreenCoordinates?: boolean
  ) => {
    nodes: NodeList;
    edges: EdgeList;
  };
  /**
   * @method Ogma.view.beforeNextFrame
   * Returns a Promise that resolves before the next frame is rendered.
   * @returns {Promise<void>}
   */
  beforeNextFrame: () => Promise<void>;
  /**
   * @method Ogma.view.afterNextFrame
   * Returns a Promise that resolves after the next frame is rendered.
   * @returns {Promise<void>}
   */
  afterNextFrame: () => Promise<void>;
  /**
   * @method Ogma.view.setFullScreen
   * Enable or disable the full screen mode.
   * @param {boolean} value `true` to enable the full screen mode, `false` to disable it.
   * @return {Promise<void>}
   * @example
   * ogma.events.onKeyPress('f', function () {
   *   ogma.view.setFullScreen(!ogma.view.isFullScreen());
   * });
   */
  setFullScreen: (value: boolean) => Promise<void>;
  /**
   * @method Ogma.view.isFullScreen
   * Indicates if the full screen mode is currently enabled.
   * @return {boolean}
   */
  isFullScreen: () => boolean;
  /**
   * @method Ogma.view.forceResize
   * Forces the canvas to be re-sized according to the container. Typically
   * useful when the visibility of the Ogma container changes, to notify Ogma
   * that it must refresh the scene.
   * @example
   * // Create a container and hide it
   * let container = document.createElement('div');
   * div.style.display = 'none';
   *
   * ogma.setContainer(container);
   *
   * // Display the container and notify Ogma about it
   * div.style.display = 'block';
   * ogma.view.forceResize();
   */
  forceResize: () => void;
  /**
   * @method Ogma.view.getSize
   * Returns the view width and height.
   * @return {{ width: number, height: number }}
   */
  getSize: () => Size;
  /**
   * @method Ogma.view.setSize
   * Set the size of the view. This method only has effect if this instance of
   * Ogma has no container.
   * @param {object} size
   * @param {number} size.width
   * @param {number} size.height
   * @return {Promise<void>}
   */
  setSize: (size: Size) => Promise<void>;
  /**
   * @method Ogma.view.locateGraph
   * Centers the view on the graph.
   * @param {LocateOptions} [options]
   * @return {Promise<void>}
   *
   * @example
   * ogma.view.locateGraph({
   *   duration: 500
   * }).then(function () {
   *   console.log('Locate done!');
   * });
   */
  locateGraph: (options?: LocateOptions | undefined) => Promise<void>;
  /**
   * @method Ogma.view.locateRawGraph
   * Centers the view on the specified raw graph.
   * @param {RawGraph} graph
   * @param {LocateOptions} [options]
   * @return {Promise<void>}
   *
   * @example
   * // We center the camera where the graph will be when added to Ogma,
   * // and then we add the graph progressively.
   * ogma.parse.gexfFromUrl('graphs/myBigGraph.gexf').then(function (graph) {
   *   ogma.view.locateRawGraph(graph);
   *   ogma.setGraph(graph, {batchSize: 1000});
   * });
   */
  locateRawGraph: (
    graph: RawGraph,
    options?: LocateOptions | undefined
  ) => Promise<void>;
  /**
   * @method Ogma.view.getGraphBoundingBox
   * Returns the bounding box of the graph, in graph coordinates.
   * @return {BoundingBox}
   */
  getGraphBoundingBox: () => BoundingBox;
  /**
   * @method Ogma.view.animationInProgress
   * Checks if any camera movement animations are currently in progress and
   * returns `true` if there are.
   * @return {boolean}
   */
  animationInProgress: () => boolean;
}

declare enum TransformationType {
  NodeFilter = 'node-filter',
  EdgeFilter = 'edge-filter',
  NodeCollapsing = 'node-collapsing',
  VirtualProperties = 'virtual-properties',
  NeighborGeneration = 'neighbor-generation',
  NeighborMerging = 'neighbor-merging',
  NodeGrouping = 'node-grouping',
  EdgeGrouping = 'edge-grouping',
  NodeClustering = 'node-clustering',
  GeoClustering = 'geo-clustering'
}

declare type TransformationId = number;
interface TransformationContext<ND, ED> {
  virtualNodes: NodeList<ND, ED>;
  virtualEdges: EdgeList<ED, ND>;
}
/**
 * @public
 * Control handle for the transformation.
 * @class Transformation
 */
declare class Transformation<ND = any, ED = any> {
  private _removalDuration;
  private _error;
  private _resolveFunction;
  private _rejectFunction;
  protected _id: TransformationId;
  protected _duration: number;
  protected _context: TransformationContext<ND, ED>;
  protected _ogma: Ogma<ND, ED>;
  shouldDo: boolean;
  shouldUndo: boolean;
  /**
   * @method Transformation.getName
   * Returns the name of the transformation.
   * @returns {"node-filter"|"edge-filter"|"node-grouping"|"edge-grouping"}
   */
  getName(): TransformationType | undefined;
  /**
   * @method Transformation.getId
   * Returns the id of the transformation, a unique strictly positive integer.
   * @returns {number}
   */
  getId(): TransformationId;
  /**
   * @method Transformation.whenApplied
   * Returns a Promise that resolves the first time the transformation is applied.
   * @returns {Promise<void>}
   */
  whenApplied(): Promise<this>;
  /**
   * @method Transformation.isEnabled
   * Returns true if the transformation is currently enabled
   * @returns {boolean}
   */
  isEnabled(): boolean;
  /**
   * @method Transformation.enable
   * Enable the transformation over the specified amount of time.
   * @param {number} [duration=0] Animation duration in ms
   * @returns {Promise<void>}
   */
  enable(duration: number): Promise<void>;
  /**
   * @method Transformation.disable
   * Disable the transformation over the specified amount of time.
   * @param {number} [duration=0] Animation duration in ms
   * @returns {Promise<void>}
   */
  disable(duration: number): Promise<void>;
  /**
   * @method Transformation.toggle
   * Toggle the transformation over the specified amount of time.
   * @param {number} [duration=0] Animation duration in ms
   * @returns {Promise<void>}
   */
  toggle(duration: number): Promise<void>;
  /**
   * @method Transformation.getIndex
   * Retrieves the index of the transformation in the pipeline.
   * @returns {number}
   */
  getIndex(): number;
  /**
   * @method Transformation.setIndex
   * Set the index of the transformation in the pipeline. The transformation with the lower index is applied first,
   * the one with the higher index is applied last.
   * @param index
   * @returns {Promise<void>}
   */
  setIndex(index: any): Promise<this>;
  /**
   * @method Transformation.destroy
   * Remove the transformation over the specified amount of time. After this methods is called,
   * the transformation is not manipulable anymore (cannot be enabled again for example).
   * Note: the animation will not be played if the transformation is not the last in the
   * transformation stack, because the transformations are sequential
   * @param {number} [duration=0] Animation duration in ms
   * @returns {Promise<void>}
   */
  destroy(duration?: number): Promise<void>;
  /**
   * @method Transformation.refresh
   * Refresh the transformation.
   * @returns {Promise<void>}
   */
  refresh(): Promise<void>;
}

/**
 * @public
 * @property {NodeList} [object.nodes] Nodes of the subgraph.
 * @property {EdgeList} [object.edges] Edges of the subgraph.
 */
interface SubGraph<ND = any, ED = any> {
  nodes: NodeList<ND, ED>;
  edges: EdgeList<ED, ND>;
}

declare type ItemId = NodeId | EdgeId;
declare type RawItem<T> = RawNode<T> | RawEdge<T>;
declare type ItemIndex = number;
interface Item<CurrentDataType = any> {
  readonly isNode: boolean;
  addClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<Item>;
  addClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<Item>;
  getAttribute(attributeName: PropertyPath): any;
  getAttributes(attributeNames?: PropertyPath[]): any;
  getClassList(): string[];
  getData(property: PropertyPath): any;
  getData(): CurrentDataType;
  getId(): ItemId;
  getTransformation(): Transformation | null;
  hasClass(className: string): boolean;
  isInView(options?: { margin?: number }): void;
  isSelected(): boolean;
  isVirtual(): boolean;
  isVisible(): boolean;
  locate(options?: LocateOptions): Promise<void>;
  pulse(options?: PulseOptions): void;
  removeClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<Item<CurrentDataType>>;
  removeClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<Item<CurrentDataType>>;
  resetAttributes(
    attributeNames?: PropertyPath[],
    options?: AttributeAnimationOptions
  ): Promise<Item<CurrentDataType>>;
  setAttribute(
    attribute: PropertyPath,
    value: any,
    options?: AttributeAnimationOptions
  ): Promise<Item<CurrentDataType>>;
  setAttributes(
    attributes: any,
    options?: AttributeAnimationOptions
  ): Promise<Item<CurrentDataType>>;
  setData(
    property?: PropertyPath,
    value?: any | ((item: Item<CurrentDataType>) => any)
  ): Item<CurrentDataType>;
  setSelected(active: boolean): void;
  toJSON(options?: {
    attributes?: PropertyPath[] | 'all';
    data?: (data: CurrentDataType) => any;
  }): RawItem<CurrentDataType>;
  toList(): any;
  fastGetAdjacentElements(): SubGraph;
}

declare type ItemListIndexes = Uint32Array;
interface ItemList<CurrentDataType = any> {
  readonly isNode: boolean;
  readonly size: number;
  addClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<ItemList<CurrentDataType>>;
  addClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<ItemList<CurrentDataType>>;
  hasClass(className: string): boolean[];
  concat(items: ItemList<CurrentDataType>): ItemList<CurrentDataType>;
  dedupe(): ItemList<CurrentDataType>;
  fillData(value: CurrentDataType, ED: any): ItemList<CurrentDataType>;
  fillData(property: PropertyPath, value: any): ItemList<CurrentDataType>;
  filter(
    callback: (item: Item<CurrentDataType>, index: number) => boolean
  ): ItemList<CurrentDataType>;
  forEach(callback: (item: Item<CurrentDataType>, index: number) => void): void;
  get(index: number): Item<CurrentDataType>;
  getAttribute(attributeName: PropertyPath): any[];
  getAttributes(attributes?: PropertyPath[]): any[];
  getClassList(): string[][];
  getData(property?: PropertyPath): any[];
  getId(): ItemId[];
  includes(item: Item<CurrentDataType>): boolean;
  inverse(): ItemList<CurrentDataType>;
  isSelected(): boolean[];
  isVisible(): boolean[];
  locate(options?: LocateOptions): Promise<void>;
  map<U = any>(
    callback: (item: Item<CurrentDataType>, index: number) => U
  ): U[];
  pulse(options?: PulseOptions): void;
  reduce(
    callback: (
      accumulator: any,
      currentValue: Item<CurrentDataType>,
      index?: number
    ) => any,
    initialValue: any
  ): any;
  removeClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<ItemList<CurrentDataType>>;
  removeClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<ItemList<CurrentDataType>>;
  resetAttributes(
    attributes?: PropertyPath[],
    options?: AttributeAnimationOptions
  ): Promise<ItemList<CurrentDataType>>;
  setAttributes(
    attributes: any,
    options?: AttributeAnimationOptions
  ): Promise<ItemList<CurrentDataType>>;
  setData(values: CurrentDataType[]): ItemList<CurrentDataType>;
  setData(
    values: (edge: Item<CurrentDataType>) => CurrentDataType,
    ED: any
  ): ItemList<CurrentDataType>;
  setData(property: PropertyPath, values: any[]): ItemList<CurrentDataType>;
  setData(
    property: PropertyPath,
    values: (edge: Item<CurrentDataType>) => any
  ): ItemList<CurrentDataType>;
  setSelected(active: boolean | boolean[]): void;
  slice(start?: number, end?: number): ItemList<CurrentDataType>;
  toArray(): Item<CurrentDataType>[];
  toJSON(options?: {
    attributes?: PropertyPath[] | 'all';
    data?: (data: any) => any;
  }): RawItem$1<CurrentDataType>[];
  toList(): ItemList<CurrentDataType>;
}

declare class EdgeList<ED = any, ND = any> implements ItemList<ED> {
  // TODO: fix it
  // readonly isNode = false;
  readonly isNode: boolean;

  constructor(indexes: ItemListIndexes, ogma: Ogma);
  get size(): number;
  /**
   * @method EdgeList.setAttributes
   * Set the individual attributes of all the edges in the list.
   * @param {EdgeAttributesValue|Array<EdgeAttributesValue>} attributes If a single attribute is specified, it is applied to all edges.
   * If an array is specified, each index of the array is assigned to the corresponding edge.
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<EdgeList>}
   * @example
   * var edgeList = ogma.getEdges([0, 1]);
   *
   * edgeList.setAttributes({width: 50, color: 'blue'});
   *
   * edgeList.setAttributes([{width: 50, color: 'blue'}, {width: 20, color: 'red'}], {
   *   duration: 500
   * });
   */
  setAttributes(
    attributes: EdgeAttributesValue<ED, ND> | EdgeAttributesValue<ED, ND>[],
    options?: AttributeAnimationOptions
  ): Promise<EdgeList<ED, ND>>;
  /**
   * @method EdgeList.setAttribute
   * Set the specified attribute of all the edges in the list.
   * @param {PropertyPath} attribute
   * @param {any|Array<any>} value If it is an array, the values will be spread across the edges of the list.
   * Otherwise the value will be assigned to all edges.
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<EdgeList>}
   * @example
   * var edges = ogma.getEdges([0, 1]);
   *
   * // Assign the same radius to the two edges
   * edges.setAttribute('width', 30);
   *
   * // Assign different texts to the two edges
   * edges.setAttribute('text', ['Edge 0', 'Edge 1']);
   */
  setAttribute<A extends EdgeAttributesKeys>(
    attribute: A,
    value: Partial<EdgeAttributeTypes[A]> | Partial<EdgeAttributeTypes[A]>[],
    options?: AttributeAnimationOptions
  ): Promise<EdgeList<ED, ND>>;
  /**
   * @method EdgeList.getAttributes
   * Returns an array of objects containing the specified attributes for each edge.
   * @param {PropertyPath[]} [attributes] List of attributes to include in the object. If not specified, includes all the edge attributes.
   * @return {EdgeAttributes[]}
   * @example
   * var edgeList = ogma.getEdges([0, 1]);
   *
   * edgeList.setAttributes([{width: 50, color: 'blue'}, {width: 20, color: 'red'}]);
   * console.log(edgeList.getAttributes(['width', 'color'])); // [{width: 50, color: 'blue'}, {width: 20, color: 'red'}]
   */
  getAttributes<T extends EdgeAttributesKeys[]>(
    attributes: T
  ): UnionToIntersection<EdgeAttributeSubTreeTypes[T[number]]>[];
  getAttributes(attributes?: never): EdgeAttributes[];
  /**
   * @method EdgeList.getAttribute
   * Returns an array containing the value of the specified attribute for each edge.
   * @param {PropertyPath} attributeName Attribute to retrieve.
   * @return {any[]}
   * @example
   * var edgeList = ogma.getEdges([0, 1]);
   *
   * edgeList.setAttribute('width', 30);
   * console.log(edgeList.getAttribute('width')); // [30, 30]
   */
  getAttribute<A extends EdgeAttributesKeys>(path: A): EdgeAttributeTypes[A][];
  getAttribute<A extends EdgeAttributesTuplesKeys>(
    path: A
  ): EdgeAttributeTypes[EdgeMappedTupleAttributes<A>][];
  /**
   * @method EdgeList.resetAttributes
   * Remove all attributes that have been applied through `setAttributes` of all the edges in the list.
   * Original attributes or attributes applied by the rules are not affected.
   * @param {Array<PropertyPath>} [attributes] List of attributes to clear. If no attribute is specified, clear all of them.
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<EdgeList>}
   */
  resetAttributes<A extends EdgeAttributesKeys>(
    attributes?: A[],
    options?: AttributeAnimationOptions
  ): Promise<EdgeList<ED, ND>>;
  /**
   * @method EdgeList.getParallelEdges
   * Retrieves the list of edges parallel to the edges, including the source edges themselves.
   * @param {object} [options]
   * @param {Filter} [options.filter="visible"] Indicates which edges to take into account
   * @returns {EdgeList}
   */
  getParallelEdges<ParallelED = ED>(options?: {
    filter?: Filter;
  }): EdgeList<ParallelED, ND>;
  fastGetAdjacentElements(): SubGraph<any, any>;
  /**
   * @method EdgeList.getAdjacentElements
   * Retrieves the list of edges parallel to the edges, excluding the source edges themselves plus the extremities of the edges.
   * @returns {EdgeList}
   */
  getAdjacentElements<AdjacentNodeType, AdjacentEdgeType>(): SubGraph<
    AdjacentNodeType,
    AdjacentEdgeType
  >;
  /**
   * @method EdgeList.isVisible
   * Call [`isVisible`](#Edge-isVisible) on each edge in the list, and returns the array of results.
   * @return {Array<boolean>}
   */
  isVisible(): boolean[];
  isExcluded(): (0 | 1)[];
  setExcluded(value: boolean): void;
  /**
   * @method EdgeList.setVisible
   * Call [`setVisible`](#Edge-setVisible) on each edge in the list.
   */
  setVisible(value: boolean): void;
  /**
   * @method EdgeList.toList
   * Returns itself.
   * @return {EdgeList}
   */
  toList(): EdgeList<ED, ND>;
  /**
   * @method EdgeList.toArray
   * Returns an array of edges from the EdgeList.
   * @return {Array<Edge>}
   */
  toArray(): Edge<ED, ND>[];
  clone(): EdgeList<ED, ND>;
  /**
   * @method EdgeList.getId
   * Returns the id of each edge.
   * @returns {Array<EdgeId>}
   */
  getId(): EdgeId[];
  /**
   * @method EdgeList.getSource
   * Returns the list of source nodes of the edges
   * @return {NodeList}
   */
  getSource(): NodeList<ND, ED>;
  /**
   * @method EdgeList.getTarget
   * Returns the list of target nodes of the edges
   * @return {NodeList}
   */
  getTarget(): NodeList<ND, ED>;
  /**
   * @method EdgeList.getExtremities
   * Returns a `NodeList` containing the sources and targets of the edges. Duplicate nodes are not removed.
   * @return {NodeList}
   */
  getExtremities(): NodeList<ND, ED>;
  /**
   * @method EdgeList.get
   * Returns the edge at the specified index.
   * @param {number} index
   * @return {Edge}
   */
  get(index: number): Edge<ED, ND>;
  forEach(callback: (edge: Edge<ED, ND>, index: number) => void): void;
  map<U>(callback: (edge: Edge<ED, ND>, index: number) => U): U[];
  filter(
    callback: (edge: Edge<ED, ND>, index: number) => unknown
  ): EdgeList<ED, ND>;
  reduce(
    callbackfn: (
      previousValue: ED,
      currentValue: Edge<ED, ND>,
      index: number
    ) => ED,
    initialValue: ED
  ): ED;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: Edge<ED, ND>,
      index: number
    ) => U,
    initialValue: U
  ): U;
  concat(edges: EdgeList<ED, ND>): EdgeList<ED, ND>;
  /**
   * @method EdgeList.dedupe
   * Returns a new EdgeList which does not contain any duplicate edge.
   * @return {EdgeList}
   */
  dedupe(): EdgeList<ED, ND>;
  /**
   * Returns a new EdgeList which does not contain any element from list
   */
  subtract(list: EdgeList): EdgeList;
  /**
   * @method EdgeList.slice
   * Returns a new EdgeList which contains only the edges from index `start` to `end` (excluding `end`).
   * @param {number} [start]
   * @param {number} [end]
   * @return {EdgeList}
   */
  slice(start?: number, end?: number): EdgeList<ED, ND>;
  indexOf(edge: Edge<ED, ND>): number;
  /**
   * @method EdgeList.includes
   * Indicates if the `EdgeList` contains the specified edge.
   * @param {Edge} edge
   * @return {boolean}
   */
  includes(edge: Edge<ED, ND>): boolean;
  sort(fn: (a: Edge<ED, ND>, b: Edge<ED, ND>) => number): EdgeList<ED, ND>;
  /**
   * @method EdgeList.inverse
   * Returns a new EdgeList containing all the visible edges that are not in the list.
   * @return {EdgeList}
   */
  inverse(): EdgeList<ED, ND>;
  /**
   * @method EdgeList.toJSON
   * Runs `toJSON` on all the edges in the list and returns the list of objects.
   * @param {object} [options]
   * @param {Array<PropertyPath>|"all"} [options.attributes=[]]
   * @param {function (data: any): any} [options.data]
   * @return {Array<RawEdge>}
   */
  toJSON(options?: EdgeJSONOptions): RawEdge<ED>[];
  /**
   * @param active whether to select or unselect the edges.
   */
  setSelected(active: boolean | boolean[]): void;
  /**
   * @method EdgeList.isSelected
   * Indicates if the edges are currently selected.
   * @return {Array<boolean>}
   */
  isSelected(): boolean[];
  /**
   * @method EdgeList.locate
   * Centers the view on the edges.
   * @param {LocateOptions} [options]
   * @return {Promise<void>}
   *
   * @example
   * ogma.getSelectedEdges().locate();
   */
  locate(options?: LocateOptions): Promise<void>;
  /**
   * @method EdgeList.getBoundingBox
   * Returns the bounding box of the edges, in graph coordinates.
   * @param {boolean} [ignoreCurvature=false] Use it if you want to only take into
   *                                          account the edge sources and targets.
   * @return {BoundingBox}
   */
  getBoundingBox(ignoreCurvature?: boolean): BoundingBox;
  /**
   * @method EdgeList.setData
   * Set the specified data property of the edges. If no property is specified, update the whole data object.
   * @param {PropertyPath} [property] Path of the data property to update.
   * @param {Array<any>|function(edge: Edge): any} values If it's an array, each value is assigned to the corresponding edge,
   * meaning the array must have the same length as the EdgeList. If it's a function, it will be applied to each edge to
   * @return {EdgeList}
   * determine which value to assign.
   */
  setData(value: (edge: Edge<ED, ND>) => ED): EdgeList<ED, ND>;
  setData(value: ED[]): EdgeList<ED, ND>;
  setData(
    property: PropertyPath,
    value: (edge: Edge<ED, ND>) => any
  ): EdgeList<ED, ND>;
  setData(property: PropertyPath, value: any): EdgeList<ED, ND>;
  setData<K1 extends keyof ED>(
    property: K1 | [K1],
    values: ED[K1][] | ((edge: Edge<ED, ND>) => ED[K1])
  ): EdgeList<ED, ND>;
  setData<K1 extends keyof ED, K2 extends keyof ED[K1]>(
    property: [K1, K2],
    values: ED[K1][K2][] | ((edge: Edge<ED, ND>) => ED[K1][K2][])
  ): EdgeList<ED, ND>;
  setData<
    K1 extends keyof ED,
    K2 extends keyof ED[K1],
    K3 extends keyof ED[K1][K2]
  >(
    property: [K1, K2, K3],
    values: ED[K1][K2][K3][] | ((edge: Edge<ED, ND>) => ED[K1][K2][K3])
  ): EdgeList<ED, ND>;
  /**
   * @method EdgeList.fillData
   * Set the specified data property of the edges with the same value.
   * @param {PropertyPath|any} [property] Path of the data property to update. If no property is specified, update the whole data object.
   * @param {any} value Value that will be assigned to all the edges.
   * @return {EdgeList}
   */
  fillData(value: ED): EdgeList<ED, ND>;
  fillData<K1 extends keyof ED>(
    property: K1 | [K1],
    value: ED[K1] | ((edge: Edge<ED, ND>) => ED[K1])
  ): EdgeList<ED, ND>;
  fillData<K1 extends keyof ED, K2 extends keyof ED[K1]>(
    property: [K1, K2],
    value: ED[K1][K2] | ((edge: Edge<ED, ND>) => ED[K1][K2][])
  ): EdgeList<ED, ND>;
  fillData<
    K1 extends keyof ED,
    K2 extends keyof ED[K1],
    K3 extends keyof ED[K1][K2]
  >(
    property: [K1, K2, K3],
    value: ED[K1][K2][K3] | ((edge: Edge<ED, ND>) => ED[K1][K2][K3])
  ): EdgeList<ED, ND>;
  fillData(property: PropertyPath, value: any): EdgeList<ED, ND>;
  /**
   * @method EdgeList.getData
   * Retrieve the specified data property. If no property is specified, retrieve the whole data object.
   * This method method returns the internal data object; modifying it could cause unexpected behavior.
   * @param {PropertyPath} [property]
   * @return {Array<any>}
   */
  getData(): ED[];
  getData<K1 extends keyof ED>(property: K1 | [K1]): ED[K1][];
  getData<K1 extends keyof ED, K2 extends keyof ED[K1]>(
    property: [K1, K2]
  ): ED[K1][K2][];
  getData<
    K1 extends keyof ED,
    K2 extends keyof ED[K1],
    K3 extends keyof ED[K1][K2]
  >(property: [K1, K2, K3]): ED[K1][K2][K3][];
  getData(property: PropertyPath): any[];
  /**
   * @method EdgeList.addClass
   * Add the specified class to the edges.
   * @param {string} className
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<EdgeList>}
   */
  addClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<EdgeList<ED, ND>>;
  /**
   * @method EdgeList.addClasses
   * Add the specified classes to the edges.
   * @param {Array<string>} classNames
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<EdgeList>}
   */
  addClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<EdgeList<ED, ND>>;
  /**
   * @method EdgeList.removeClass
   * Remove the specified class from the edges.
   * @param {string} className
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<EdgeList>}
   */
  removeClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<EdgeList<ED, ND>>;
  /**
   * @method EdgeList.removeClasses
   * Remove the specified class from the edges.
   * @param {Array<string>} classNames
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<EdgeList>}
   */
  removeClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<EdgeList<ED, ND>>;
  /**
   * @method Edge.hasClass
   * Indicates if the edges have the specified class.
   * @param {string} className
   * @return {Array<boolean>}
   */
  hasClass(className: string): boolean[];
  /**
   * @method EdgeList.getClassList
   * Returns the list of classes that each edge has.
   * @returns {Array<Array<string>>}
   */
  getClassList(): string[][];
  getAnimationInformation(): AnimationInformation[];
  /**
   * @method EdgeList.getMetaEdge
   * Run `getMetaEdge` on each edge in the list and returns the array of results.
   * @returns {Array<Edge|null>}
   */
  getMetaEdge<MetaND = any, MetaED = any>(): (Edge<MetaND, MetaED> | null)[];
  /**
   * @method EdgeList.getSubEdges
   * Run `getSubEdges` on all the edges in the list and returns the array of results
   * @returns {Array<EdgeList|null>}
   */
  getSubEdges<SubND = any, SubED = any>(): (EdgeList<SubND, SubED> | null)[];
  /**
   * @method EdgeList.pulse
   * Highlights the edges. It's a shorthand for the case when you
   * want the elements pulse for `number * (interval - 1) + duration` milliseconds.
   * It will also update the pulse attributes of the items with the one provided
   * in the `.pulse()` call
   * @param {object} [options]
   * @param {number} [options.number=1]                             Number of pulses
   * @param {number} [options.duration=1000]                        Duration of a pulse (milliseconds)
   * @param {number} [options.interval=800]                         Interval between two pulses (milliseconds)
   * @param {Color|"inherit"} [options.startColor="rgb(0,0,0,0.6)"] Starting color of the pulse
   * @param {Color|"inherit"} [options.endColor="rgb(0,0,0,0.0)"]   Ending color of the pulse
   * @param {number} [options.width=10]                             Width of the pulse in pixels
   * @param {number} [options.startRatio=1]                         Where the pulse starts, relative to the edge siz (1 = at the edge's border)
   * @param {number} [options.endRatio=2]                           Where the pulse ends, relative to the edge siz (1 = at the edge's border)
   */
  pulse(options?: PulseOptions): void;
}

declare type BrandPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';
/**
 * @public
 * @property {"top-left"|"top-right"|"bottom-left"|"bottom-right"} [position="bottom-right"] Indicates the position of the brand.
 * @property {number} [horizontalMargin=0] Indicates the space in pixels between the brand and the top/bottom of the screen (depending on the position)
 * @property {number} [verticalMargin=0] Indicates the space in pixels between the brand and the right/left of the screen (depending on the position)
 * @property {string} [className] If specified, this class will be added to the HTML created HTML element.
 */
interface BrandOptions {
  position: BrandPosition;
  horizontalMargin?: number;
  verticalMargin?: number;
  className?: string;
}
declare class BrandAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.brand.set
   * Display the specified HTML in one of the corner of the canvas.
   *
   * If the brand shows in one of the corner of the page instead of the Ogma container, change the css "position" attribute
   * of the container to "relative".
   * @param {string} html HTML content to display.
   * @param {BrandOptions} [options]
   * @return {HTMLElement}
   * @example
   * ogma.tools.brand.set('<a href="http://www.my-company.com">Powered by MyCompany</a>', {
   *   position: "top-right",
   *   className: "myCssClass"
   * });
   */
  set: (html: string, options: BrandOptions) => HTMLDivElement;
  /**
   * @method Ogma.tools.brand.remove
   * Remove the brand HTML element.
   */
  remove: () => void;
}

/**
 * @public
 * @property {number} latitude Latitude (degrees)
 * @property {number} longitude Longitude (degrees)
 */
interface GeoCoordinate {
  latitude: number;
  longitude: number;
}
/**
 * @public
 * @property {number} latitude Latitude (degrees)
 * @property {number} longitude Longitude (degrees)
 * @property {number} zoom      Map scale
 */
interface MapPosition {
  latitude: number;
  longitude: number;
  zoom: number;
}
interface BaseMapOptions {
  url?: string;
  subdomains?: string;
  tms?: boolean;
  wms?: boolean;
}
/**
 * @public
 * @property {PropertyPath}  [latitudePath='latitude']    Node path which contains the latitude.
 * @property {PropertyPath}  [longitudePath='longitude']  Node path which contains the longitude.
 * @property {number}  [maxZoomLevel=20]            Maximum geo-spatial zoom.
 * @property {number}  [minZoomLevel=1]             Minimum geo-spatial zoom.
 * @property {boolean} [wrapCoordinates=true]       Whether to wrap the coordinate to the projection space of
 *                                               [-180, 180] for longitude, [-85, 85] for longitude.
 *                                               If set to false, nodes with coordinates outside of that
 *                                               range will not be shown.
 * @property {number}  [sizeRatio=1]             Multiplier for the node radius an edge width.
 * @property {object|L.Layer}  [tiles]           In addition to the following list, this object supports also [Leaflet TileLayer Options](https://leafletjs.com/reference-1.5.0.html#tilelayer-options)
 *                                               and [Leaflet WMS TileLayer Options](https://leafletjs.com/reference-1.5.0.html#tilelayer-wms-options) options
 * @property {string}  [tiles.url='https://{s}.tile.osm.org/{z}/{x}/{y}.png']
 *                                               Format of the URL used to search for tiles.
 *                                               Must contain `'{z}'` (zoom level of the tile),
 *                                               `'{x}'` and `'{y}'` (coordinates of the tile).
 *                                               Possible `'{s}'` (replaced by one of the
 *                                               characters in the `tileUrlSubdomains` setting).
 *                                               Possible `'{r}'` for tile servers who support retina tiles.
 * @property {string} [tiles.subdomains='abc']      Format of the URL used to search for tiles.
 * @property {boolean} [tiles.tms=false]            Useful when using a `TMS` service.
 * @property {boolean} [tiles.wms=false]            Useful when using a `WMS` service. For custom WMS parameters the [Leaflet WMS TileLayer](https://leafletjs.com/reference-1.5.0.html#tilelayer-wms-options)
 *                                                options can be used as reference for additional parameters to be set
 * @property {string}  [attribution='Map data &copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap contributors</a>']           HTML string that will be displayed on the
 *                                               corner, indicates the source of the tiles.
 * @property {BrandOptions} [attributionOptions]  Position and options for the attribution message
 * @property {CRS} [crs=L.CRS.EPSG3857]           This parameter controls the Coordinate Reference System used for
 *                                                the map projection. Usually you do not need to change it, unless
 *                                                you need custom projections. For more information see the [Leaflet CRS documentation](https://leafletjs.com/reference-1.5.0.html#crs).
 * @property {Color}   [backgroundColor='silver']   Color of the map background (color of the missing tiles).
 * @property {number}  [opacity=1]                  Map baselayer opacity
 * @property {number}  [duration=0]                 Duration of the transition when swapping mode.
 * @property {boolean} [disableNodeDragging=true]   Disable node dragging when the mode is on. Dragging is disabled
 *                                                  by default, because geo mode is not scale-free.
 * @property {string}  [tileUrlTemplate='https://{s}.tile.osm.org/{z}/{x}/{y}.png']
 *                                               Format of the URL used to search for tiles.
 *                                               Must contain `'{z}'` (zoom level of the tile),
 *                                               `'{x}'` and `'{y}'` (coordinates of the tile).
 *                                               Possible `'{s}'` (replaced by one of the
 *                                               characters in the `tileUrlSubdomains` setting).
 *                                               Possible `'{r}'` for tile servers who support retina tiles.
 *                                               Deprecated: use `tiles.url` now.
 * @property {string}  [tileUrlSubdomains='abc'] Values with which the '{s}' string in the URL can be replaced.
 *                                               Deprecated, use `tiles.subdomains` instead.
 * @property {number}  [tileBuffer=2]            Number of extra tiles to be downloaded around
 *                                               the viewport bounds, to make the panning smoother.
 *                                               Deprecated: this is automatically handled now, alternatively,
 *                                               you can pass this to the `tiles` together with the [`L.TileLayer`
 *                                               options](https://leafletjs.com/reference-1.5.0.html#gridlayer-keepbuffer).
 */
interface GeoModeOptions {
  latitudePath?: PropertyPath;
  longitudePath?: PropertyPath;
  maxZoomLevel?: number;
  minZoomLevel?: number;
  sizeRatio?: number;
  tileUrlTemplate?: string;
  tileUrlSubdomains?: string;
  tileBuffer?: number;
  attribution?: string | null;
  attributionOptions?: BrandOptions;
  opacity?: number;
  duration?: number;
  backgroundColor?: Color;
  disableNodeDragging?: boolean;
  wrapCoordinates?: boolean;
  tiles?: L.Layer | BaseMapOptions;
  crs?: L.CRS;
}
/**
 * @module geo
 * Allows to display nodes which have geographical coordinates (latitude and longitude) on a map.
 *
 * This module adds two properties to nodes: `latitude` and `longitude`.
 * Valid values for geographical zooms can be found [here](http://wiki.openstreetmap.org/wiki/Zoom_levels).
 *
 * The projection model used is Spherical Mercator.
 *
 * @example Initializing a small graph
 *
 * var ogma = new Ogma({
 *   graph: {
 *     nodes: [
 *       {id: 'Paris', lat: 48.858838, long: 2.343436, size: 8},
 *       {id: 'London', lat: 51.509615, long: -0.134514, size: 10}
 *     ]
 *   });
 *
 * // Switch to geographical mode
 * ogma.geo.enable({
 *   latitudePath: 'lat',           // indicates that the latitude is located in the 'lat' property of nodes
 *   longitudePath: 'long',         // indicates that the longitude is located in the 'long' property of nodes
 *   tileUrlTemplate: 'http://{s}.myTileProvider.com/{z}/{x}/{y}.png' // indicates from which server the tiles must be retrieved
 * });
 *
 * @demo geo-mode
 * @demo geo-mode-providers
 */
declare class GeoAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.geo.enable
   *
   * Enables geo mode layout
   *
   * @param  {GeoModeOptions} [options]
   * @return {Promise<void>}
   *
   * @example
   * ogma.geo.enable({ tileUrlTemplate: 'http://{s}.myTileProvider.com/{z}/{x}/{y}.png'})
   *   .then(function() { console.log('geo mode is on'); });
   */
  enable: (options?: GeoModeOptions | undefined) => Promise<void>;
  /**
   * @method Ogma.geo.disable
   *
   * Disables geo layout
   * @param  {GeoModeOptions} [options]
   * @return {Promise<void>}
   *
   * @example
   * ogma.geo.disable({ tileUrlTemplate: 'http://{s}.myTileProvider.com/{z}/{x}/{y}.png'})
   *   .then(function() { console.log('geo mode is off'); });
   */
  disable: (options?: GeoModeOptions | undefined) => Promise<void>;
  /**
   * @method Ogma.geo.setOptions
   * Update module settings
   *
   * @param  {GeoModeOptions} [options]
   *
   * @example
   * ogma.geo.setOptions({ latitudePath: 'geo.lat', longitudePath: 'geo.lng' });
   * ogma.enable().then(function() { console.log('geo mode is on'); });
   */
  setOptions: (options: GeoModeOptions) => void;
  /**
   * @method Ogma.geo.getOptions
   * Get module settings.
   *
   * @return  {GeoModeOptions}
   */
  getOptions: () => GeoModeOptions;
  /**
   * @method Ogma.geo.getMap
   * Get the underling map object (a Leaflet Map instance). Returns null when the Geo mode is disabled.
   *
   * @return  {Map}
   */
  getMap: () => Map | null;
  /**
   * @method Ogma.geo.enabled
   *
   * Check whether geographical mode is enabled.
   * @return {boolean}
   *
   * @example
   * if (ogma.geo.enabled()) console.log('geo mode is enabled');
   */
  enabled: () => boolean;
  /**
   * @method Ogma.geo.getCenter
   *
   * Returns current map position. Returns undefined when the Geo mode is disabled.
   * @return {GeoCoordinate}
   *
   * @example
   * ogma.geo.enable()
   *   .then(function() {
   *     console.log(ogma.geo.getCenter());
   *     // { "latitude": 50.25, "longitude":1.14 }
   *   });
   */
  getCenter: () => GeoCoordinate | undefined;
  /**
   * @method Ogma.geo.getView
   *
   * Returns current map position. Returns undefined when the Geo mode is disabled.
   * @return {MapPosition}
   * @example
   * ogma.geo.enable()
   *   .then(function() {
   *     console.log(ogma.geo.getView());
   *     // { "latitude": 50.25, "longitude":1.14, "zoom": 9 }
   *   });
   */
  getView: () => MapPosition | undefined;
  /**
   * @method Ogma.geo.getZoom
   *
   * Returns current map zoom level. Returns undefined when the Geo mode is disabled.
   * @return {number}
   *
   * @example
   * ogma.geo.enable().then(function() {
   *   console.log(ogma.geo.getZoom()); // 9
   * });
   */
  getZoom: () => number | undefined;
  /**
   * @method Ogma.geo.setZoom
   *
   * Sets zoom level of the map
   * @param  {number} zoom
   *
   * @example
   * ogma.geo.setZoom(10);
   */
  setZoom: (zoom: number) => Promise<void>;
  /**
   * @method Ogma.geo.setView
   *
   * Set map view - coordinates and zoom level
   * @param  {number} latitude
   * @param  {number} longitude
   * @param  {number} zoom
   *
   * @example
   * ogma.geo.setView(55.2, 46.12, 10);
   */
  setView: (latitude: number, longitude: number, zoom: number) => Promise<void>;
  /**
   * @method Ogma.geo.setCenter
   *
   * Centers the map at given coodinates
   * @param  {number} latitude
   * @param  {number} longitude
   *
   * @example
   * ogma.geo.setCenter(12.5, 55.2);
   */
  setCenter: (latitude: number, longitude: number) => Promise<void>;
  /**
   * @method Ogma.geo.toggle
   *
   * Toggles geo mode. Useful when you don't want to store information about
   * whether the mode was on or off(e.g. with an UI switcher).
   * @param {GeoModeOptions} [options]
   * @return {Promise<void>}
   *
   * @example
   * // switch geo mode on or off by a UI element without checking its state
   * checkbox.addEventListener('change', function () {
   *   ogma.geo.toggle({ tileUrlTemplate: URL });
   * });
   */
  toggle: (options: GeoModeOptions) => Promise<void>;
  /**
   * @method Ogma.geo.resetCoordinates
   *
   * Reset geographical coordinates of the nodes to the initial values
   *
   * @example
   * var node = ogma.getNode('id');
   * console.log(node.getGeoCoordinates()); // { latitude: 5, longitude: 10 }
   * ogma.getNode('id').setGeoCoordinates({ latitude: 0, longitude: 0 });
   * console.log(node.getGeoCoordinates()); // { latitude: 0, longitude: 0 }
   * ogma.geo.resetCoodinates();
   * console.log(node.getGeoCoordinates()); // { latitude: 5, longitude: 10 }
   */
  resetCoordinates: () => void;
  /**
   * @method Ogma.geo.getUnprojectedCoordinates
   *
   * Returns underlying X and Y positions for the nodes that are currently
   * handled by the geo-mode.
   * @param {Array<NodeId>|Filter|Array<Node>} [selector="visible"]
   * @return {Array<{x: number, y: number}>}
   */
  getUnprojectedCoordinates: (
    selector: NodeId[] | Filter | Node$1<ND, ED>[] | NodeList<ND, ED>
  ) => Point[];
}

declare class Node$1<ND = any, ED = any> implements Item<ND> {
  // TODO: fix this
  // readonly size = 1;
  // readonly isNode = true;
  // readonly isList = false;

  readonly size: number;
  readonly isNode: boolean;
  readonly isList: boolean;

  constructor(index: ItemIndex, ogma: Ogma);
  /**
   * @method Node.setAttributes
   * Set the individual attributes of the node.
   * @param {NodeAttributesValue} attributes Attributes to update
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<Node>}
   * @example
   * node.setAttributes({
   *   x: 100,
   *   y: 50,
   *   color: 'blue',
   *   radius: 15
   * }, {
   *   duration: 500
   * });
   */
  setAttributes(
    attributes: NodeAttributesValue<ND, ED>,
    options?: AttributeAnimationOptions
  ): Promise<Node$1<ND, ED>>;
  /**
   * @method Node.setAttribute
   * Set the specified attribute of the node.
   * @param {PropertyPath} attribute
   * @param {any} value
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<Node>}
   * @example
   * // Change the color of the node
   * node.setAttribute('color', 'blue');
   *
   * // Change the scale of the top left badge
   * // The two lines do the same thing
   * node.setAttribute('badges.topLeft.scale', 0.5);
   * node.setAttribute(['badges', 'topLeft', 'scale'], 0.5);
   */
  setAttribute<A extends NodeAttributesKeys>(
    attribute: A,
    value: Partial<NodeAttributeTypes[A]>,
    options?: AttributeAnimationOptions
  ): Promise<Node$1<ND, ED>>;
  /**
   * @method Node.resetAttributes
   * Remove all attributes that have been applied through `setAttributes`. Original attributes or attributes applied by  the rules are not affected.
   * @param {Array<PropertyPath>} [attributeNames] List of attributes to clear. If no attribute is specified, clear all  of them.
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<Node>}
   * @example
   * node.setAttributes({color: 'blue'});
   * node.resetAttributes();
   */
  resetAttributes(
    attributeNames?: NodeAttributesKeys[],
    options?: AttributeAnimationOptions
  ): Promise<Node$1<ND, ED>>;
  /**
   * @method Node.getAttributes
   * Returns an object containing the specified attributes for the node.
   * @param {Array<PropertyPath>} [attributeNames] List of attributes to include in the object. If not specified,  includes all the node attributes.
   * @return {NodeAttributes}
   * @example
   * node.setAttributes({x: 50, y: 100, color: 'blue'});
   * console.log(node.getAttributes(['x', 'y', 'color'])); // {x: 50, y: 100, color: 'blue'}
   */
  getAttributes<T extends NodeAttributesKeys[]>(
    attributeNames?: T
  ): UnionToIntersection<NodeAttributeSubTreeTypes[T[number]]>;
  getAttributes(attributeNames?: never): NodeAttributes;
  /**
   * @method Node.getAttribute
   * Returns the value of the specified attribute for the node.
   * @param {PropertyPath} attributeName Attribute to retrieve.
   * @return {any}
   * @example
   * node.getAttribute('color'); // "blue"
   */
  getAttribute<A extends NodeAttributesKeys>(path: A): NodeAttributeTypes[A];
  getAttribute<A extends NodeAttributesTuplesKeys>(
    path: A
  ): NodeAttributeTypes[NodeMappedTupleAttributes<A>];
  /**
   * @method Node.getPosition
   * Retrieve the position of the node. This is strictly equivalent to `node.getAttributes(['x', 'y'])`.
   * @return {{x: number, y: number}}
   */
  getPosition(): Point;
  getPositionOnScreen(): Point;
  isInScreen(): boolean;
  replaceOriginalAttributes(
    attributes: NodeAttributesKeys[],
    excluded: NodeAttributesKeys[]
  ): void;
  getPreviousAttributes(names: NodeAttributesKeys[]): any;
  /**
   * @method Node.isInView
   * Indicates if the node is visible in the current view.
   * @param {object} [options]
   * @param {number} [options.margin=0] Tolerance in pixels.
   * @returns {boolean}
   */
  isInView(options?: { margin?: number }): boolean;
  /**
   * @method Node.getAdjacentNodes
   * Returns the list of adjacent nodes of the node.
   * @param {AdjacencyOptions} [options]
   * @return {NodeList}
   */
  getAdjacentNodes<AdjacentNodeType = ND, AdjacentEdgeType = ED>(
    options?: AdjacencyOptions
  ): NodeList<AdjacentNodeType, AdjacentEdgeType>;
  /**
   * @method Node.getAdjacentEdges
   * Returns the list of adjacent edges of the node.
   * @param {AdjacencyOptions} [options]
   * @return {EdgeList}
   */
  getAdjacentEdges<AdjacentEdgeType = ED, AdjacentNodeType = ND>(
    options?: AdjacencyOptions
  ): EdgeList<AdjacentEdgeType, AdjacentNodeType>;
  /**
   * @method Node.getAdjacentElements
   * Returns the list of adjacent nodes of the node and the edges connected to it.
   * @param {AdjacencyOptions} [options]
   * @return {SubGraph}
   */
  getAdjacentElements<AdjacentEdgeType = ED, AdjacentNodeType = ND>(
    options?: AdjacencyOptions
  ): SubGraph<AdjacentNodeType, AdjacentEdgeType>;
  /**
   * @method Node.getDegree
   * Retrieve the number of neighbors of the node.
   * @param {object|EdgeDirection} [options]
   * @param {EdgeDirection} [options.direction="both"] Direction of the edges to follow.
   * @param {Filter} [options.filter="visible"] Indicates which edges to take into account
   * @return {number}
   */
  getDegree(options?: EdgeDirectionSetting | EdgeDirection): number;
  fastGetAdjacentElements(): SubGraph<any, any>;
  /**
   * Returns weakly connected component to which the node belongs
   * @param {object} [options]
   * @param {Filter} [options.filter='visible']
   * @param {boolean} [options.returnIds=false] Return node ids instead of Nodes
   * @return {NodeList}
   *
   * @example
   * // detect whether the nodes belong to the same component
   * var node1 = ogma.getNode('1');
   * var node2 = ogma.getNode('2');
   * var sameSubGraph = node1.getConnectedComponent().includes(node2);
   */
  getConnectedComponent<ND, ED>(options?: {
    filter?: Filter;
    returnIds?: boolean;
  }): NodeList<ND, ED>;
  /**
   * @method Node.isVisible
   * Indicates if the node is visible. A node is not visible if it has been filtered out, or if it is used in a
   * transformation.
   * /!\ A node with an opacity of 0 is considered visible!
   * @return {boolean}
   */
  isVisible(): boolean;
  isExcluded(): 0 | 1;
  setExcluded(value: boolean): void;
  /**
   * @method Node.setVisible
   * Hide or show the node.
   * @param {boolean} value whether to show or hide the node.
   * @example
   * ogma.getNode('n0').setVisible(true);
   */
  setVisible(value: boolean): void;
  /**
   * @method Node.toList
   * Returns a new NodeList that contains only the node.
   * @return {NodeList}
   */
  toList(): NodeList<ND, ED>;
  /**
   * @method Node.getId
   * Returns the id of the node.
   * @returns {NodeId}
   */
  getId(): NodeId;
  slice(): NodeList<ND, ED>;
  /**
   * @method Node.toJSON
   * Returns an object containing the id, attributes and data of the node.
   * @param {object} [options]
   * @param {Array<PropertyPath>|"all"} [options.attributes=[]] List of
   * attributes to retrieve. By default, retrieve all attributes.
   * @param {function (data: any): any} [options.data] Function that takes the
   * node's data in input and return the data to retrieve. By default return
   * the whole object.
   * @return {RawNode}
   * @example
   * // Simple case: serialize a node as JSON
   * var toSerialize = node.toJSON();
   * var serialized = JSON.stringify(toSerialize);
   *
   * // Since the `toJSON()` method doesn't take any argument in this example,
   * it's also possible
   * // to not call it explicitly:
   * var serialized = JSON.stringify(node);
   * @example
   * // Only serialize a few attributes and the `customerInfo` data property
   * var toSerialize = node.toJSON({
   *   attributes: ['color', 'radius', 'text.content', 'text.font'],
   *   data: function (data) {
   *     return data.customerInfo;
   *   }
   * });
   */
  toJSON(options?: NodeJSONOptions): RawNode<ND>;
  get(index: number): this | undefined;
  /**
   * @method Node.setSelected
   * Add or remove the node to/from the selection.
   * @param {boolean} active whether to select or unselect the node.
   * @example
   * ogma.getNode('n0').setSelected(true);
   */
  setSelected(active: boolean): void;
  /**
   * @method Node.isSelected
   * Indicates if the node is currently selected.
   * @return {boolean}
   * @example
   * console.log(ogma.getNode('n0').isSelected());
   */
  isSelected(): boolean;
  /**
   * @method Node.locate
   * Centers the view on the node.
   * @param {LocateOptions} [options]
   * @return {Promise<void>}
   * @example
   * ogma.getNode('n0').locate();
   */
  locate(options?: LocateOptions): Promise<void>;
  /**
   * @method Node.getBoundingBox
   * Returns the bounding box of the node, in graph coordinates.
   * @return {BoundingBox}
   */
  getBoundingBox(): BoundingBox;
  /**
   * @method Node.setData
   * Set the specified data property of the node. If no property is specified,
   * update the whole data object.
   * @param {PropertyPath} [property]
   * @param {any|function(node: Node): any} value
   * @return {Node}
   * @example
   * // Simple case
   * ogma.getNode('n0').setData('propName', 'propValue');
   *
   * // Setting a nested property
   * ogma.getNode('n0').setData(['foo', 'bar'], 'value');
   */
  setData(value: (node: Node$1<ND, ED>) => ND): Node$1<ND, ED>;
  setData(value: ND): Node$1<ND, ED>;
  setData(
    property: PropertyPath,
    value: (node: Node$1<ND, ED>) => any
  ): Node$1<ND, ED>;
  setData(property: PropertyPath, value: any): Node$1<ND, ED>;
  setData<K1 extends keyof ND>(
    property: K1,
    value: ND[K1] | ((node: Node$1<ND, ED>) => ND[K1])
  ): Node$1<ND, ED>;
  setData<K1 extends keyof ND, K2 extends keyof ND[K1]>(
    property: [K1, K2],
    value: ND[K1][K2] | ((node: Node$1<ND, ED>) => ND[K1][K2])
  ): Node$1<ND, ED>;
  setData<
    K1 extends keyof ND,
    K2 extends keyof ND[K1],
    K3 extends keyof ND[K1][K2]
  >(
    property: [K1, K2, K3],
    value: ND[K1][K2][K3] | ((node: Node$1<ND, ED>) => ND[K1][K2][K3])
  ): Node$1<ND, ED>;
  /**
   * @method Node.getData
   * Retrieve the specified data property of the node. If no property is
   * specified, retrieve the whole data object. This method method returns the
   * internal data object; modifying it could cause unexpected behavior.
   * @param {PropertyPath} [property]
   * @return {any}
   * @example
   * // Simple case
   * ogma.getNode('n0').getData('propName');
   *
   * // Accessing a nested property
   * ogma.getNode('n0').getData(['foo', 'bar']);
   */
  getData(): ND;
  getData(property: undefined): ND;
  getData<K1 extends keyof ND>(property: K1 | [K1]): ND[K1];
  getData<K1 extends keyof ND, K2 extends keyof ND[K1]>(
    property: [K1, K2]
  ): ND[K1][K2];
  getData<
    K1 extends keyof ND,
    K2 extends keyof ND[K1],
    K3 extends keyof ND[K1][K2]
  >(property: [K1, K2, K3]): ND[K1][K2][K3];
  getData(property: PropertyPath): any;
  /**
   * @method Node.addClass
   * Add the specified class to the node.
   * @param {string} className
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<Node>}
   */
  addClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<Node$1<ND, ED>>;
  /**
   * @method Node.addClasses
   * Add the specified classes to the node.
   * @param {Array<string>} classNames
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<Node>}
   */
  addClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<Node$1<ND, ED>>;
  /**
   * @method Node.removeClass
   * Remove the specified class from the node.
   * @param {string} className
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<Node>}
   */
  removeClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<Node$1<ND, ED>>;
  /**
   * @method Node.removeClasses
   * Remove the specified class from the node.
   * @param {Array<string>} classNames
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<Node>}
   */
  removeClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<Node$1<ND, ED>>;
  /**
   * @method Node.hasClass
   * Indicates if the node has the specified class.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className: string): boolean;
  /**
   * @method Node.getClassList
   * Returns the list of classes that the node has.
   * @returns {Array<string>}
   */
  getClassList(): string[];
  /**
   * @method Node.getGeoCoordinates
   *
   * Returns node's geographical coordinate
   * @return {GeoCoordinate}
   *
   * @exmaple
   * var ogma = new Ogma({
   *   graph: {
   *     nodes: [{id: 0, data: { latitude: 5, longitude: 10}}]
   *   }
   * });
   * ogma.getNode(0).getGeoCoordinates(); // { latitude: 5, longitude: 10}
   */
  getGeoCoordinates(): Partial<GeoCoordinate>;
  /**
   * @method Node.setGeoCoordinates
   *
   * Set geographical position of the node. Passing null will erase the
   * coordinates and remove the node from the visualisation in geo mode.
   * @param {GeoCoordinate|null} coords
   * @return {Promise<Node>}
   *
   * @example
   * var node = ogma.getNode('id');
   * node.setGeoCoodinates({ latitude: 5, longitude: 10 });
   * console.log(node.getGeoCoordinates()); // { latitude: 5, longitude: 10}
   */
  setGeoCoordinates(coords: GeoCoordinate | null): Promise<Node$1<ND, ED>>;
  getAnimationInformation(): AnimationInformation;
  /**
   * @method Node.isVirtual
   * Indicates if the node was created by a transformation (`true`) or not
   * (`false`).
   * @returns {boolean}
   */
  isVirtual(): boolean;
  /**
   * @method Node.getTransformation
   * Returns the transformation that created the node, if it is virtual.
   * Otherwise returns `null`.
   * @returns {Transformation|null}
   */
  getTransformation(): Transformation<ND, ED> | null;
  /**
   * @method Node.getMetaNode
   * If the node is grouped inside a meta-node, returns this meta-node.
   * Otherwise, returns null.
   * @returns {Node|null}
   */
  getMetaNode<MetaND = any, MetaED = any>(): Node$1<MetaND, MetaED> | null;
  /**
   * @method Node.getSubNodes
   * If the node is a meta-node (result of a grouping), returns the list of
   * nodes that are part of the group
   * it represents. If it's not a meta-node, returns `null`.
   * @returns {NodeList|null}
   */
  getSubNodes<SubND = any, SubED = any>(): NodeList<SubND, SubED> | null;
  /**
   * @method Node.pulse
   * Highlights the node. It's a shorthand for the case when you
   * want the elements pulse for `number * (interval - 1) + duration` milliseconds.
   * It will also update the pulse attributes of the items with the one provided
   * in the `.pulse()` call.
   *
   * @param {object} [options]
   * @param {number} [options.number=1]                             Number of pulses
   * @param {number} [options.duration=1000]                        Duration of a pulse (milliseconds)
   * @param {number} [options.interval=800]                         Interval between two pulses (milliseconds)
   * @param {Color|"inherit"} [options.startColor="rgb(0,0,0,0.6)"] Starting color of the pulse
   * @param {Color|"inherit"} [options.endColor="rgb(0,0,0,0.0)"]   Ending color of the pulse
   * @param {number} [options.width=50]                             Width of the pulse in pixels
   * @param {number} [options.startRatio=1]                         Where the pulse starts, relative to the node siz (1 = at the node's border)
   * @param {number} [options.endRatio=2]                           Where the pulse ends, relative to the node siz (1 = at the node's border)
   */
  pulse(options?: PulseOptions): void;
}

interface EdgeDirectionSetting {
  direction: EdgeDirection;
  filter: Filter;
}
declare class Edge<ED = any, ND = any> implements Item<ED> {
  // TODO: fix this
  // readonly size = 1;
  // readonly isNode = false;
  // readonly isList = false;

  readonly size: number;
  readonly isNode: boolean;
  readonly isList: boolean;

  constructor(index: ItemIndex, ogma: Ogma);
  /**
   * @method Edge.setAttributes
   * Set the individual attributes of the edge.
   * @param {EdgeAttributesValue} attributes Attributes to update
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<Edge>}
   * @example
   * edge.setAttributes({width: 50, color: 'blue'}, {
   *   duration: 500
   * });
   */
  setAttributes(
    attributes: EdgeAttributesValue<ED, ND>,
    options?: AttributeAnimationOptions,
    updatedAttributes?: PropertyPath[]
  ): Promise<Edge<ED, ND>>;
  /**
   * @method Edge.setAttribute
   * Set the specified attribute of the edge.
   * @param {PropertyPath} attribute
   * @param {any} value
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<Edge>}
   * @example
   * // Change the color of the edge
   * edge.setAttribute('color', 'blue');
   *
   * // Change the scale of the secondary text
   * // The two lines do the same thing
   * edge.setAttribute('text.secondary.scale', 0.5);
   * edge.setAttribute(['text', 'secondary', 'scale'], 0.5);
   */
  setAttribute<A extends EdgeAttributesKeys>(
    attribute: A,
    value: EdgeAttributeTypes[A],
    options?: AttributeAnimationOptions
  ): Promise<Edge<ED, ND>>;
  /**
   * @method Edge.getAttributes
   * Returns an object containing the specified attributes for the edge.
   * @param {Array<PropertyPath>} [attributeNames] List of attributes to include in the object. If not specified, includes all the edge attributes.
   * @return {EdgeAttributes}
   * @example
   * edge.setAttributes({width: 50, color: 'blue'});
   * console.log(edge.getAttributes(['width', 'color'])); // {width: 50, color: 'blue'}
   */
  getAttributes<T extends EdgeAttributesKeys[]>(
    attributeNames: T
  ): UnionToIntersection<EdgeAttributeSubTreeTypes[T[number]]>;
  getAttributes(attributeNames?: never): EdgeAttributes;
  /**
   * @method Edge.getAttribute
   * Returns the value of the specified attribute for the edge.
   * @param {PropertyPath} attributeName Attribute to retrieve.
   * @return {any}
   * @example
   * edge.getAttribute('color'); // "blue"
   */
  getAttribute<A extends EdgeAttributesKeys>(path: A): EdgeAttributeTypes[A];
  getAttribute<A extends EdgeAttributesTuplesKeys>(
    path: A
  ): EdgeAttributeTypes[EdgeMappedTupleAttributes<A>];
  /**
   * @method Edge.resetAttributes
   * Remove all attributes that have been applied through `setAttributes`.
   * Original attributes or attributes applied by the rules are not affected.
   * @param {Array<PropertyPath>} [attributeNames] List of attributes to clear.
   * If no attribute is specified, clear all of them.
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<Edge>}
   */
  resetAttributes(
    attributeNames?: EdgeAttributesKeys[],
    options?: AttributeAnimationOptions
  ): Promise<Edge<ED, ND>>;
  /**
   * @method Edge.isInView
   * Indicates if the edge is visible in the current view.
   * @param {object} [options]
   * @param {number} [options.margin=0] Tolerance in pixels.
   * @returns {boolean}
   */
  isInView(options?: { margin?: number }): boolean;
  /**
   * @method Edge.getParallelEdges
   * Retrieves the list of edges parallel to the edge, including the source edge itself.
   * @param {object} [options]
   * @param {Filter} [options.filter="visible"] Indicates which edges to take into account
   * @returns {EdgeList}
   */
  getParallelEdges<ParallelED = ED>(options?: {
    filter: Filter;
  }): EdgeList<ParallelED, ND>;
  fastGetAdjacentElements(): {
    nodes: NodeList;
    edges: EdgeList;
  };
  /**
   * @method Edge.getAdjacentElements
   * Retrieves the list of edges parallel to the edge, excluding the source edge plus the extremities of the edge.
   * @returns {SubGraph}
   */
  getAdjacentElements<AdjacentNodeType, AdjacentEdgeType>(): SubGraph<
    AdjacentNodeType,
    AdjacentEdgeType
  >;
  /**
   * @method Edge.isVisible
   * Indicates if the edge is visible. A edge is not visible if it has been filtered out, or if it is used in a
   * transformation.
   * /!\ A edge with an opacity of 0 is considered visible!
   * @return {boolean}
   */
  isVisible(): boolean;
  isExcluded(): 0 | 1;
  setExcluded(value: boolean): void;
  /**
   * @method Edge.setVisible
   * Hide or show the edge.
   * @param {boolean} value whether to show or hide the edge.
   * @example
   * ogma.getEdge('e0').setVisible(true);
   */
  setVisible(value: boolean): void;
  /**
   * @method Edge.toList
   * Returns a new EdgeList that contains only the edge.
   * @return {EdgeList}
   */
  toList(): EdgeList<ED, ND>;
  /**
   * @method Edge.getId
   * Returns the id of the edge.
   * @returns {EdgeId}
   */
  getId(): EdgeId;
  /**
   * @method Edge.getSource
   * Returns the source node of the edge
   * @return {Node}
   */
  getSource(): Node$1<ND, ED>;
  /**
   * @method Edge.getTarget
   * Returns the target node of the edge
   * @return {Node}
   */
  getTarget(): Node$1<ND, ED>;
  /**
   * @method Edge.getExtremities
   * Returns a `NodeList` containing the source and the target of the edge.
   * @return {NodeList}
   */
  getExtremities(): NodeList<ND, ED>;
  /**
   * @method Edge.setSource
   * Set the source node of the edge.
   * @param {Node} source
   */
  setSource(source: Node$1<ND, ED>): void;
  /**
   * @method Edge.setTarget
   * Set the target node of the edge.
   * @param {Node} target
   */
  setTarget(target: Node$1<ND, ED>): void;
  slice(): EdgeList<ED, ND>;
  /**
   * @method Edge.toJSON
   * Returns an object containing the id, source id, target id, attributes and data of the edge.
   * @param {object} [options]
   * @param {Array<PropertyPath>|"all"} [options.attributes=[]] List of attributes to retrieve. By default, retrieve all attributes.
   * @param {function (data: any): any} [options.data] Function that takes the edge's data in input and return
   * the data to retrieve. By default return the whole object.
   * @return {RawEdge}
   */
  toJSON(options?: EdgeJSONOptions): RawEdge;
  get(index: number): this | undefined;
  /**
   * @method Edge.setSelected
   * Add or remove the edge to/from the selection.
   * @param {boolean} active whether to select or unselect the edge.
   */
  setSelected(active: boolean): void;
  /**
   * @method Edge.isSelected
   * Indicates if the edge is currently selected.
   * @return {boolean}
   */
  isSelected(): boolean;
  /**
   * @method Edge.locate
   * Centers the view on the edge.
   * @param {LocateOptions} [options]
   * @return {Promise<void>}
   *
   * @example
   * ogma.getEdge('e0').locate();
   */
  locate(options?: LocateOptions): Promise<void>;
  /**
   * @method Edge.getBoundingBox
   * Returns the bounding box of the edge, in graph coordinates.
   * @param {boolean} [ignoreCurvature=false] Use it if you want to only take into
   *                                          account the edge source and target.
   * @return {BoundingBox}
   */
  getBoundingBox(ignoreCurvature?: boolean): BoundingBox;
  /**
   * @method Edge.setData
   * Set the specified data property of the edge. If no property is specified, update the whole data object.
   * @param {PropertyPath} [property]
   * @param {any|function(edge: Edge): any} value
   * @return {Edge}
   */
  setData(value: (edge: Edge<ED, ND>) => ED): Edge<ED, ND>;
  setData(value: ED): Edge<ED, ND>;
  setData(
    property: PropertyPath,
    value: (edge: Edge<ED, ND>) => any
  ): Edge<ED, ND>;
  setData(property: PropertyPath, value: any): Edge<ED, ND>;
  /**
   * @method Edge.getData
   * Retrieve the specified data property of the edge. If no property is specified, retrieve the whole data object.
   * This method method returns the internal data object; modifying it could cause unexpected behavior.
   * @param {PropertyPath} [property]
   * @return {any}
   */
  getData<K1 extends keyof ED>(property: K1 | [K1]): ED[K1];
  getData<K1 extends keyof ED, K2 extends keyof ED[K1]>(
    property: [K1, K2]
  ): ED[K1][K2];
  getData<
    K1 extends keyof ED,
    K2 extends keyof ED[K1],
    K3 extends keyof ED[K1][K2]
  >(property: [K1, K2, K3]): ED[K1][K2][K3];
  getData(property: PropertyPath): any;
  getData(): ED;
  /**
   * @method Edge.addClass
   * Add the specified class to the edge.
   * @param {string} className
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<Edge>}
   */
  addClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<Edge<ED, ND>>;
  /**
   * @method Edge.addClasses
   * Add the specified classes to the edge.
   * @param {Array<string>} classNames
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<Edge>}
   */
  addClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<Edge<ED, ND>>;
  /**
   * @method Edge.removeClass
   * Remove the specified class from the edge.
   * @param {string} className
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<Edge>}
   */
  removeClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<Edge<ED, ND>>;
  /**
   * @method Edge.removeClasses
   * Remove the specified class from the edge.
   * @param {Array<string>} classNames
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<Edge>}
   */
  removeClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<Edge<ED, ND>>;
  /**
   * @method Edge.hasClass
   * Indicates if the edge has the specified class.
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className: string): boolean;
  /**
   * @method Edge.getClassList
   * Returns the list of classes that the edge has.
   * @returns {Array<string>}
   */
  getClassList(): string[];
  getAnimationInformation(): AnimationInformation;
  /**
   * @method Edge.isVirtual
   * Indicates if the edge was created by a transformation (`true`) or not (`false`).
   * @returns {boolean}
   */
  isVirtual(): boolean;
  /**
   * @method Edge.getTransformation
   * Returns the transformation that created the edge, if it is virtual. Otherwise returns `null`.
   * @returns {Transformation|null}
   */
  getTransformation(): Transformation<ND, ED> | null;
  /**
   * @method Edge.getMetaEdge
   * If the edge is grouped inside a meta-edge, returns this meta-edge. Otherwise, returns null.
   * @returns {Edge|null}
   */
  getMetaEdge<MetaED = any, MetaND = any>(): Edge<MetaED, MetaND> | null;
  /**
   * @method Edge.getSubEdges
   * If the edge is a meta-edge (result of a grouping), returns the list of edges that are part of the group
   * it represents. If it's not a meta-edge, returns `null`.
   * @returns {EdgeList|null}
   */
  getSubEdges<SubED = any, SubND = any>(): EdgeList<SubED, SubND> | null;
  /**
     * @method Edge.pulse
     * Highlights the edge. It's a shorthand for the case when you
     * want the elements pulse for `number * (interval - 1) + duration` milliseconds.
     * It will also update the pulse attributes of the items with the one provided
     * in the `.pulse()` call.
  
     * @param {object} [options]
     * @param {number} [options.number=1]                             Number of pulses
     * @param {number} [options.duration=1000]                        Duration of a pulse (milliseconds)
     * @param {number} [options.interval=800]                         Interval between two pulses (milliseconds)
     * @param {Color|"inherit"} [options.startColor="rgb(0,0,0,0.6)"] Starting color of the pulse
     * @param {Color|"inherit"} [options.endColor="rgb(0,0,0,0.0)"]   Ending color of the pulse
     * @param {number} [options.width=10]                             Width of the pulse in pixels
     * @param {number} [options.startRatio=1]                         Where the pulse starts, relative to the edge siz (1 = at the edge's border)
     * @param {number} [options.endRatio=2]                           Where the pulse ends, relative to the edge siz (1 = at the edge's border)
     */
  pulse(options?: PulseOptions): void;
}

declare class NodeList<ND = any, ED = any> implements ItemList<ND> {
  // TODO: fix this
  // readonly isNode = true;
  readonly isNode: boolean;
  constructor(indexes: ItemListIndexes, ogma: Ogma);
  get size(): number;
  /**
   * @method NodeList.setAttributes
   * Set the individual attributes of all the nodes in the list.
   * @param {NodeAttributesValue|Array<NodeAttributesValue>} attributes If a single attribute is specified, it is applied to all nodes.
   * If an array is specified, each index of the array is assigned to the corresponding node.
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<NodeList>}
   * @example
   * var nodeList = ogma.getNodes([0, 1]);
   *
   * nodeList.setAttributes({radius: 50, color: 'blue'});
   *
   * nodeList.setAttributes([{x: 50, y: 20, color: 'blue'}, {x: 20, y: 50, color: 'red'}], {
   *   duration: 500
   * });
   */
  setAttributes(
    attributes: NodeAttributesValue<ND, ED> | NodeAttributesValue<ND, ED>[],
    options?: AttributeAnimationOptions
  ): Promise<NodeList<ND, ED>>;
  /**
   * @method NodeList.setAttribute
   * Set the specified attribute of all the nodes in the list.
   * @param {PropertyPath} attribute
   * @param {any|Array<any>} values If it is an array, the values will be spread across the nodes of the list.
   * Otherwise the value will be assigned to all nodes.
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<NodeList>}
   * @example
   * var nodes = ogma.getNodes([0, 1]);
   *
   * // Assign the same radius to the two nodes
   * nodes.setAttribute('radius', 7);
   *
   * // Assign different texts to the two nodes
   * nodes.setAttribute('text', ['Node 0', 'Node 1']);
   */
  setAttribute<A extends NodeAttributesKeys>(
    attribute: A,
    values: Partial<NodeAttributeTypes[A]> | Partial<NodeAttributeTypes[A]>[],
    options?: AttributeAnimationOptions
  ): Promise<NodeList<ND, ED>>;
  /**
   * @method NodeList.getAttributes
   * Returns an array of objects containing the specified attributes for each node.
   * @param {Array<PropertyPath>} [attributes] List of attributes to include in the object. If not specified, includes all the node attributes.
   * @return {NodeAttributes[]}
   * @example
   * var nodeList = ogma.getNodes([0, 1]);
   *
   * nodeList.setAttributes([{x: 50, y: 20, color: 'blue'}, {x: 20, y: 50, color: 'red'}]);
   * console.log(nodeList.getAttributes(['x', 'y', 'color'])); // [{x: 50, y: 20, color: 'blue'}, {x: 20, y: 50, color: 'red'}]
   */
  getAttributes<T extends NodeAttributesKeys[]>(
    attributes: T
  ): UnionToIntersection<NodeAttributeSubTreeTypes[T[number]]>[];
  getAttributes(attributes?: never): NodeAttributes[];
  /**
   * @method NodeList.getAttribute
   * Returns an array containing the value of the specified attribute for each node.
   * @param {PropertyPath} attributeName Attribute to retrieve.
   * @return {Array<any>}
   * @example
   * var nodeList = ogma.getNodes([0, 1]);
   *
   * nodeList.setAttribute('radius', 7);
   * console.log(nodeList.getAttribute('radius')); // [7, 7]
   */
  getAttribute<A extends NodeAttributesKeys>(path: A): NodeAttributeTypes[A][];
  getAttribute<A extends NodeAttributesTuplesKeys>(
    path: A
  ): NodeAttributeTypes[NodeMappedTupleAttributes<A>][];
  /**
   * @method NodeList.resetAttributes
   * Remove all attributes that have been applied through `setAttributes` of all the nodes in the list.
   * Original attributes or attributes applied by the rules are not affected.
   * @param {Array<PropertyPath>} [attributes] List of attributes to clear. If no attribute is specified, clear all of them.
   * @param {AttributeAnimationOptions} [options]
   * @return {Promise<NodeList>}
   */
  resetAttributes(
    attributes?: PropertyPath[],
    options?: AttributeAnimationOptions
  ): Promise<NodeList<ND, ED>>;
  /**
   * @method NodeList.getPosition
   * Retrieve the position of each node in the list. This is strictly equivalent to `nodeList.getAttributes(['x', 'y'])`.
   * @return {Array<{x: number, y: number}>}
   */
  getPosition(): Point[];
  getPositionOnScreen(): Point[];
  replaceOriginalAttributes(attributes: any, excluded: any): void;
  /**
   * @method NodeList.getAdjacentNodes
   * Returns the list of adjacent nodes of the nodes.
   * @param {AdjacencyOptions} [options]
   * @return {NodeList}
   */
  getAdjacentNodes<AdjacentNodeType = ND, AdjacentEdgeType = ED>(
    options?: AdjacencyOptions
  ): NodeList<AdjacentNodeType, AdjacentEdgeType>;
  /**
   * @method NodeList.getAdjacentEdges
   * Returns the list of adjacent edges of the nodes.
   * @param {AdjacencyOptions} [options]
   * @return {EdgeList}
   */
  getAdjacentEdges<AdjacentEdgeType = ED, AdjacentNodeType = ND>(
    options?: AdjacencyOptions
  ): EdgeList<AdjacentEdgeType, AdjacentNodeType>;
  /**
   * @method NodeList.getAdjacentElements
   * Returns the list of adjacent nodes of the nodeList and the edges connected to it.
   * @param {AdjacencyOptions} [options]
   * @return {SubGraph}
   */
  getAdjacentElements<AdjacentEdgeType = ED, AdjacentNodeType = ND>(
    options?: AdjacencyOptions
  ): SubGraph<AdjacentNodeType, AdjacentEdgeType>;
  /**
   * @method NodeList.getDegree
   * Runs `getDegree` on each node in the list and returns the array of results.
   */
  getDegree(options?: EdgeDirectionSetting | EdgeDirection): number[];
  /**
   * @method NodeList.getConnectedComponents
   * Returns weakly connected components of the list of nodes.
   * @param {object} [options]
   * @param {Filter} [options.filter='visible']
   * @param {boolean} [options.returnIds=false] Return node ids instead of Nodes
   * @return {Array<NodeList>}
   */
  getConnectedComponents<ND, ED>(options: {
    filter?: Filter;
    returnIds?: boolean;
  }): NodeList<ND, ED>[];
  fastGetAdjacentElements(): SubGraph<any, any>;
  /**
   * @method NodeList.isVisible
   * Call [`isVisible`](#Node-isVisible) on each node in the list, and returns the array of results.
   * @return {Array<boolean>}
   */
  isVisible(): boolean[];
  isExcluded(): (0 | 1)[];
  setExcluded(value: boolean): void;
  /**
   * @method NodeList.setVisible
   * Call [`setVisible`](#Node-setVisible) on each node in the list.
   */
  setVisible(value: boolean): void;
  /**
   * @method NodeList.toList
   * Returns itself.
   * @return {NodeList}
   */
  toList(): NodeList<ND, ED>;
  /**
   * @method NodeList.toArray
   * Returns an array of nodes from the NodeList.
   * @return {Array<Node>}
   */
  toArray(): Node$1<ND, ED>[];
  clone(): NodeList<ND, ED>;
  /**
   * @method NodeList.getId
   * Returns the id of each node.
   * @returns {Array<NodeId>}
   */
  getId(): NodeId[];
  /**
   * @method NodeList.get
   * Returns the node at the specified index.
   * @param {number} index
   * @return {Node}
   */
  get(index: number): Node$1<ND, ED>;
  forEach(callback: (node: Node$1<ND, ED>, index: number) => void): void;
  map<U>(callback: (node: Node$1<ND, ED>, index: number) => U): U[];
  filter(
    callback: (node: Node$1<ND, ED>, index: number) => unknown
  ): NodeList<ND, ED>;
  reduce(
    callbackfn: (
      previousValue: ND,
      currentValue: Node$1<ND, ED>,
      index: number
    ) => ND,
    initialValue: ND
  ): ND;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: Node$1<ND, ED>,
      index: number
    ) => U,
    initialValue: U
  ): U;
  concat(nodes: NodeList<ND, ED>): NodeList<ND, ED>;
  /**
   * @method NodeList.dedupe
   * Returns a new NodeList which does not contain any duplicate node.
   * @return {NodeList}
   */
  dedupe(): NodeList<ND, ED>;
  /**
   * Returns a new NodeList which does not contain any element from list
   */
  subtract(list: NodeList<ND, ED>): NodeList<ND, ED>;
  /**
   * @method NodeList.slice
   * Returns a new NodeList which contains only the nodes from index `start` to `end` (excluding `end`).
   * @param {number} [start]
   * @param {number} [end]
   * @return {NodeList}
   */
  slice(start?: number, end?: number): NodeList<ND, ED>;
  indexOf(node: Node$1<ND, ED>): number;
  /**
   * @method NodeList.includes
   * Indicates if the `NodeList` contains the specified node.
   * @param {Node} node
   * @return {boolean}
   */
  includes(node: Node$1<ND, ED>): boolean;
  /**
   * @method NodeList.inverse
   * Returns a new NodeList containing all the visible nodes that are not in the list.
   * @return {NodeList}
   */
  inverse(): NodeList<ND, ED>;
  /**
   * @param fn sort function
   */
  sort(fn: (a: Node$1<ND, ED>, b: Node$1<ND, ED>) => number): NodeList<ND, ED>;
  /**
   * @method NodeList.toJSON
   * Runs `toJSON` on all the nodes in the list and returns the list of objects.
   * @param {object} [options]
   * @param {Array<PropertyPath>|"all"} [options.attributes=[]]
   * @param {function (data: any): any} [options.data]
   * @return {Array<RawNode>}
   */
  toJSON(options?: NodeJSONOptions): RawNode<ND>[];
  /**
   * @method NodeList.setSelected
   * Add or remove the nodes from the selection.
   * @param {boolean|Array<boolean>} active whether to select or unselect the nodes.
   * @example
   * var nodes = ogma.getNodes(['n0', 'n1', 'm2']);
   *
   * // Select all the nodes
   * nodes.setSelected(true);
   *
   * // Select one of them, and unselect the other two
   * nodes.setSelected([true, false, false]);
   */
  setSelected(active: boolean | boolean[]): void;
  /**
   * @method NodeList.isSelected
   * Indicates for each node if it is selected.
   * @return {Array<boolean>}
   */
  isSelected(): boolean[];
  /**
   * @method NodeList.locate
   * Centers the view on the nodes.
   * @param {LocateOptions} [options]
   * @return {Promise<void>}
   *
   * @example
   * ogma.getSelectedNodes().locate();
   */
  locate(options?: LocateOptions): Promise<void>;
  /**
   * @method NodeList.getBoundingBox
   * Returns the bounding box of the nodes, in graph coordinates.
   * @return {BoundingBox}
   */
  getBoundingBox(): BoundingBox;
  /**
   * @method NodeList.setData
   * Set the specified data property of the nodes. If no property is specified, update the whole data object.
   * @param {PropertyPath} [property] Path of the data property to update.
   * @param {Array<any>|function(node: Node): any} values If it's an array, each value is assigned to the corresponding node,
   * meaning the array must have the same length as the NodeList. If it's a function, it will be applied to each node to
   * determine which value to assign.
   *
   * @return {NodeList}
   * @example
   * var nodes = ogma.getNodes(['n0', 'n1']);
   *
   * // Assigning data with a function
   * nodes.setData('aPlusB', function (node) {
   *   return node.getData('a') + node.getData('b');
   * });
   *
   * // Assigning data using an array
   * nodes.setData('foo', [23, 42]);
   */
  setData(value: (node: Node$1<ND, ED>) => ND): NodeList<ND, ED>;
  setData<K1 extends keyof ND>(
    property: K1 | [K1],
    values: ND[K1][] | ((node: Node$1<ND, ED>) => ND[K1])
  ): NodeList<ND, ED>;
  setData<K1 extends keyof ND, K2 extends keyof ND[K1]>(
    property: [K1, K2],
    values: ND[K1][K2][] | ((node: Node$1<ND, ED>) => ND[K1][K2])
  ): NodeList<ND, ED>;
  setData<
    K1 extends keyof ND,
    K2 extends keyof ND[K1],
    K3 extends keyof ND[K1][K2]
  >(
    property: [K1, K2, K3],
    values: ND[K1][K2][K3][] | ((node: Node$1<ND, ED>) => ND[K1][K2][K3])
  ): NodeList<ND, ED>;
  setData(value: ND[]): NodeList<ND, ED>;
  setData(
    property: PropertyPath,
    value: (node: Node$1<ND, ED>) => any
  ): NodeList<ND, ED>;
  setData(property: PropertyPath, value: any): NodeList<ND, ED>;
  /**
   * @method NodeList.fillData
   * Set the specified data property of the nodes with the same value.
   * @param {PropertyPath|any} [property] Path of the data property to update. If no property is specified, update the whole data object.
   * @param {any} value Value that will be assigned to all the nodes.
   * @return {NodeList}
   * @example
   * ogma.getNodes().fillData('propName', 'value');
   */
  fillData(value: ND): NodeList<ND, ED>;
  fillData<K1 extends keyof ND>(
    property: K1 | [K1],
    value: ND[K1] | ((node: Node$1<ND, ED>) => ND[K1])
  ): NodeList<ND, ED>;
  fillData<K1 extends keyof ND, K2 extends keyof ND[K1]>(
    property: [K1, K2],
    value: ND[K1][K2] | ((node: Node$1<ND, ED>) => ND[K1][K2][])
  ): NodeList<ND, ED>;
  fillData<
    K1 extends keyof ND,
    K2 extends keyof ND[K1],
    K3 extends keyof ND[K1][K2]
  >(
    property: [K1, K2, K3],
    value: ND[K1][K2][K3] | ((node: Node$1<ND, ED>) => ND[K1][K2][K3])
  ): NodeList<ND, ED>;
  fillData(property: PropertyPath, value: any): NodeList<ND, ED>;
  /**
   * @method NodeList.getData
   * Retrieve the specified data property. If no property is specified, retrieve the whole data object.
   * This method method returns the internal data object; modifying it could cause unexpected behavior.
   * @param {PropertyPath} [property]
   * @return {Array<any>}
   * @example
   * var nodes = ogma.getNodes(['n0', 'n1']);
   *
   * nodes.setData('foo', [42, 23]);
   *
   * console.log(nodes.getData('foo')); // Displays: "42,23"
   */
  getData(): ND[];
  getData(property: undefined): ND[];
  getData<K1 extends keyof ND>(property: K1 | [K1]): ND[K1][];
  getData<K1 extends keyof ND, K2 extends keyof ND[K1]>(
    property: [K1, K2]
  ): ND[K1][K2][];
  getData<
    K1 extends keyof ND,
    K2 extends keyof ND[K1],
    K3 extends keyof ND[K1][K2]
  >(property: [K1, K2, K3]): ND[K1][K2][K3][];
  getData(property: PropertyPath): any[];
  /**
   * @method NodeList.addClass
   * Add the specified class to the nodes.
   * @param {string} className
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<NodeList>}
   */
  addClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<NodeList<ND, ED>>;
  /**
   * @method NodeList.addClasses
   * Add the specified classes to the nodes.
   * @param {Array<string>} classNames
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<NodeList>}
   */
  addClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<NodeList<ND, ED>>;
  /**
   * @method NodeList.removeClass
   * Remove the specified class from the nodes.
   * @param {string} className
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<NodeList>}
   */
  removeClass(
    className: string,
    options?: AttributeAnimationOptions
  ): Promise<NodeList<ND, ED>>;
  /**
   * @method NodeList.removeClasses
   * Remove the specified class from the nodes.
   * @param {Array<string>} classNames
   * @param {AttributeAnimationOptions} [options]
   * @returns {Promise<NodeList>}
   */
  removeClasses(
    classNames: string[],
    options?: AttributeAnimationOptions
  ): Promise<NodeList<ND, ED>>;
  /**
   * @method Node.hasClass
   * Indicates if the nodes have the specified class.
   * @param {string} className
   * @return {Array<boolean>}
   */
  hasClass(className: string): boolean[];
  /**
   * @method NodeList.getClassList
   * Returns the list of classes that each node has.
   * @returns {Array<Array<string>>}
   */
  getClassList(): string[][];
  /**
   * @method NodeList.getGeoCoordinates
   *
   * Returns geographical coordinates of all the nodes in the collection
   * @return {Array<GeoCoordinate>}
   *
   * @exmaple
   * var ogma = new Ogma({
   *   graph: {
   *     nodes: [
   *       {id: 0, data: { latitude: 5, longitude: 10}},
   *       {id: 1, data: { latitude: 10, longitude: 5}}
   *     ]
   *   }
   * });
   * console.log(ogma.getNodes().getGeoCoordinates());
   * // [
   * //   { latitude: 5, longitude: 10},
   * //   { latitude: 10, longitude: 5}
   * //  ]
   */
  getGeoCoordinates(): GeoCoordinate[];
  /**
   * @method NodeList.setGeoCoordinates
   *
   * Assign geographical coordinates to the nodes in collection
   * @param {Array<GeoCoordinate|null>|null} coordinates
   * @param {number} [duration]              Animation duration
   * @return {Promise<NodeList>}
   *
   * @example
   * ogma.getNodes().setGeoCoordinates([
   *   { latitude: 5, longitude: 10},
   *   { latitude: 10, longitude: 5}
   * ]); // will trigger a redraw, if geo mode is on
   */
  setGeoCoordinates(
    coordinates: (GeoCoordinate | null)[] | null
  ): Promise<NodeList<ND, ED>>;
  getAnimationInformation(): AnimationInformation[];
  /**
   * @method NodeList.getMetaNode
   * Run `getMetaNode` on each node in the list and returns the array of results.
   * @returns {Array<Node|null>}
   */
  getMetaNode(): (Node$1 | null)[];
  /**
   * @method NodeList.getSubNodes
   * Run `getSubNodes` on all the nodes in the list and returns the array of results
   * @returns {Array<NodeList|null>}
   */
  getSubNodes(): (NodeList | null)[];
  /**
   * @method NodeList.pulse
   * Highlights the nodes with a pulse. It's a shorthand for the case when you
   * want the elements pulse for `number * (interval - 1) + duration` milliseconds.
   * It will also update the pulse attributes of the items with the one provided
   * in the `.pulse()` call.
   *
   *
   * @param {object} [options]
   * @param {number} [options.number=1]                             Number of pulses
   * @param {number} [options.duration=1000]                        Duration of a pulse (milliseconds)
   * @param {number} [options.interval=800]                         Interval between two pulses (milliseconds)
   * @param {Color|"inherit"} [options.startColor="rgb(0,0,0,0.6)"] Starting color of the pulse
   * @param {Color|"inherit"} [options.endColor="rgb(0,0,0,0.0)"]   Ending color of the pulse
   * @param {number} [options.width=50]                             Width of the pulse in pixels
   * @param {number} [options.startRatio=1]                         Where the pulse starts, relative to the node siz (1 = at the node's border)
   * @param {number} [options.endRatio=2]                           Where the pulse ends, relative to the node siz (1 = at the node's border)
   */
  pulse(options?: PulseOptions): void;
}

interface AddItemOptions {
  batchSize?: number;
  virtual?: boolean;
  ignoreInvalid?: boolean;
}

/**
 * @extends OgmaParameters
 * @property {RawGraph} [graph] Graph to initialize Ogma with
 */
interface GraphOptions {
  batchSize?: number;
  ignoreInvalid?: boolean;
}
declare class GraphAPI<ND, ED> {
  /**
   * @method Ogma.addNodes
   * Add the specified nodes to the graph. Ignores nodes that have the same id
   * as a node in the graph.
   * @param {Array<RawNode>} nodes
   * @param {object} [options]
   * @param {number} [options.batchSize] If specified, the graph will be
   *                                     imported progressively (`batchSize`
   *                                     nodes/edges at a time). It will
   *                                     effectively increase the total loading
   *                                     time, but the construction of the graph
   *                                     will be shown and the thread will not
   *                                     be frozen.
   * @return {Promise<NodeList>} Nodes added to the graph.
   * @example
   * // Simple usage
   * ogma.addNodes([{id: 0}, {id: 1}]).then(function (nodes) {
   *   console.log('Nodes ' + nodes.getId() + ' have been added to the graph.');
   * });
   *
   * // Adding nodes 1000 by 1000
   * ogma.addNodes(veryLargeArray, {batchSize: 1000}).then(function (nodes) {
   *   console.log('Nodes ' + nodes.getId() + ' have been added to the graph.');
   * });
   */
  addNodes(
    nodes: RawNode<ND>[],
    options?: AddItemOptions
  ): Promise<NodeList<ND, ED>>;
  /**
   * @method Ogma.addEdges
   * Add the specified edges to the graph
   * @param {Array<RawEdge>} edges
   * @param {object} [options]
   * @param {number} [options.batchSize] If specified, the graph will be
   *                                     imported progressively (`batchSize`
   *                                     nodes/edges at a time). It will
   *                                     effectively increase the total loading
   *                                     time, but the construction of the graph
   *                                     will be shown and the thread will not
   *                                     be frozen.
   * @param {boolean} [options.ignoreInvalid=false] If true, the method quietly
   * skip the edges whose extremities are not in the visualisation.
   * @return {Promise<EdgeList>} Edges added to the graph.
   */
  addEdges(
    edges: RawEdge<ED>[],
    options?: AddItemOptions
  ): Promise<EdgeList<ED, ND>>;
  /**
   * @method Ogma.addNode
   * Add the specified node to the graph
   * @param {RawNode} node Node to add.
   * @param {AddItemOptions} [options] Unused for now.
   * @return {Node} Node that has just been added.
   * @example
   * ogma.addNode({id: 'n0', attributes: {color: 'green'}});
   */
  addNode(node: RawNode<ND>, options?: AddItemOptions): Node$1<ND, ED>;
  /**
   * @method Ogma.addEdge
   * Add the specified edge to the graph
   * @param {RawEdge} edge Edge to add.
   * @param {AddItemOptions} [options]
   * @param {boolean} [options.ignoreInvalid=false] If true, the method quietly
   * skip the edges whose extremities are not in the visualisation.
   * @return {Edge} Edge that has just been added.
   */
  addEdge(edge: RawEdge<ED>, options?: AddItemOptions): Edge<ED, ND>;
  /**
   * @method Ogma.removeNodes
   * Remove the specified nodes from the graph
   * @param {NodeList|Array<Node|NodeId>} nodes
   * @param {object} [options] Unused for now.
   * @returns {Promise<void>}
   */
  removeNodes(
    nodes: NodeList<ND, ED> | Node$1<ND, ED>[] | NodeId[],
    options?: AddItemOptions
  ): Promise<void>;
  /**
   * @method Ogma.removeEdges
   * Remove the specified edges from the graph
   * @param {EdgeList|Array<Edge|EdgeId>} edges
   * @param {object} [options] Unused for now.
   * @returns {Promise<void>}
   */
  removeEdges(
    edges: EdgeList<ED, ND> | Edge<ED, ND>[] | EdgeId[],
    options?: AddItemOptions
  ): Promise<void>;
  /**
   * @method Ogma.removeNode
   * Remove the specified node from the graph.
   * @param {Node|NodeId} node
   * @param {object} [options] Unused for now.
   */
  removeNode(
    node: Node$1<ND, ED> | NodeId,
    options?: AddItemOptions
  ): Promise<void>;
  /**
   * @method Ogma.removeEdge
   * Remove the specified edge from the graph.
   * @param {Edge|EdgeId} edge
   * @param {object} [options] Unused for now.
   */
  removeEdge(
    edge: Edge<ED, ND> | EdgeId,
    options?: AddItemOptions
  ): Promise<void>;
  /**
   * @method Ogma.getNodes
   * Return the specified nodes.
   * @param {Array<NodeId>|Filter|Array<Node>} [selector="visible"] If it's an
   *       array of ids, returns the nodes that match the specified ids.
   * If it's "visible", return all the visible nodes. If it's "raw", returns all
   * nodes except the ones that are the result of a transformation
   * (e.g. grouping). If it's "all", returns all the nodes.
   *
   * @return {NodeList}
   * @example
   * // Returns all visible nodes
   * ogma.getNodes();
   * @example
   * // Returns a specific set of nodes
   * ogma.getNodes(['n0', 'n1', 'n3']);
   * @example
   * // If you happen to need an empty NodeList you can do
   * ogma.getNodes([]);
   */
  getNodes(
    selector?: NodeId[] | Filter | Node$1<ND, ED>[] | NodeList<ND, ED>
  ): NodeList<ND, ED>;
  /**
   * @method Ogma.getEdges
   * Return the specified edges.
   * @param {Array<EdgeId>|Filter|Array<Edge>} [selector="visible"] If it's an
   * array of ids, returns the edges that match the specified ids.
   * If it's "visible", return all the visible edges. If it's "raw", returns all
   * edges except the ones that are the result of a transformation (e.g. grouping).
   * If it's "all", returns all the edges.
   * @return {EdgeList}
   */
  getEdges(
    selector?: EdgeId[] | Filter | Edge<ED, ND>[] | EdgeList<ED, ND>
  ): EdgeList<ED, ND>;
  /**
   * @method Ogma.getNode
   * Return the specified node, or `undefined` if it doesn't exist.
   * @param {NodeId} nodeId
   * @return {Node|undefined}
   */
  getNode(nodeId: NodeId): Node$1<ND, ED> | undefined;
  /**
   * @method Ogma.getEdge
   * Return the specified edge, or `undefined` if it doesn't exist.
   * @param {EdgeId} edgeId
   * @return {Edge|undefined}
   */
  getEdge(edgeId: EdgeId): Edge<ED, ND> | undefined;
  /**
   * @method Ogma.clearGraph
   * Removes all the nodes and edges from the graph.
   *
   * @return {void}
   */
  clearGraph(): void;
  /**
   * @method Ogma.setGraph
   * Clear the graph, then add the specified nodes and edges to the graph.
   * @param {RawGraph} graph
   * @param {object}  [options]
   * @param {number} [options.batchSize] If specified, the graph will be
   * imported progressively (`batchSize` nodes/edges at a time). It will
   * effectively increase the total loading time, but the construction of the
   * graph will be shown and the thread will not be frozen.
   * @param {boolean} [options.ignoreInvalid=false] If true, the method quietly
   * skip the edges whose extremities are not in the visualisation.
   * @return {Promise<{nodes: NodeList, edges: EdgeList}>}
   */
  setGraph(
    graph: RawGraph<ND, ED>,
    options?: GraphOptions
  ): Promise<{
    nodes: NodeList<ND, ED>;
    edges: EdgeList<ED, ND>;
  }>;
  /**
   * @method Ogma.addGraph
   * Add the specified nodes and edges to the graph.
   * @param {RawGraph} graph
   * @param {object}  [options]
   * @param {number} [options.batchSize] If specified, the graph will be
   * imported progressively (`batchSize` nodes/edges at a time). It will
   * effectively increase the total loading time, but the construction of the
   * graph will be shown and the thread will not be frozen.
   * @param {boolean} [options.ignoreInvalid=false] If true, the method quietly
   * skip the edges whose extremities are not in the visualisation.
   * @return {Promise<{nodes: NodeList, edges: EdgeList}>}
   */
  addGraph(
    graph: RawGraph<ND, ED>,
    options?: {
      batchSize?: number;
      ignoreInvalid?: boolean;
    }
  ): Promise<{
    nodes: NodeList<ND, ED>;
    edges: EdgeList<ED, ND>;
  }>;
  /**
   * @method Ogma.createNodeList
   * Returns a new empty NodeList.
   * @returns {NodeList}
   */
  createNodeList(): NodeList<ND, ED>;
  /**
   * @method Ogma.createEdgeList
   * Returns a new empty EdgeList.
   * @returns {EdgeList}
   */
  createEdgeList(): EdgeList<ED, ND>;
  /**
   * @method Ogma.getConnectedComponents
   * Returns weakly connected components of the graph.
   * @param {object} [options]
   * @param {object} [options.filter='visible']
   * @param {boolean} [options.returnIds=false] Return node ids instead of Nodes
   * @return {Array<NodeList>}
   */
  getConnectedComponents(options?: {
    filter?: Filter;
    returnIds?: boolean;
  }): NodeList<ND, ED>[];
  /**
   * Returns weakly connected component to which the node belongs
   * @method  Ogma.getConnectedComponentByNode
   * @param  {Node|NodeId} node
   * @param {object} [options]
   * @param {object} [options.filter='visible']
   * @param {boolean} [options.returnIds=false] Return node ids instead of Nodes
   * @return {NodeList}
   */
  getConnectedComponentByNode(
    node: Node$1<ND, ED> | NodeId,
    options?: {
      filter?: Filter;
      returnIds?: boolean;
    }
  ): NodeList<ND, ED>;
}

/**
 * @public
 * @property {Node<ND,ED>|NodeId} root Traversal root - the node from which the traversal should start.
 * @property {(node: Node<ND, ED>) => void | boolean} onNode Node callback. Called for each node in the traversal. If you return `true`, the traversal is stopped, understanding that you have found what you were looking for.
 * @property {(edge: Edge<ED, ND>) => void | boolean} [onEdge] Edge callback. Called for each edge in the traversal. If you return `false`, the edge will not be followed.
 */
interface TraversalOptions<ND, ED> {
  root: Node$1<ND, ED> | NodeId;
  onNode: (node: Node$1<ND, ED>) => boolean | void;
  onEdge?: (edge: Edge<ND, ED>) => boolean | void;
}

interface ShortestPathOptions<ND, ED> {
  source: Node$1<ND, ED> | NodeId;
  target: Node$1<ND, ED> | NodeId;
  directed?: boolean;
  filter?: Filter;
  edgeCostFunction?: (edge: Edge<ED, ND>) => number;
  heuristicFunction?: (
    source: Node$1<ND, ED>,
    target: Node$1<ND, ED>
  ) => number;
}
declare class AlgorithmsAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.algorithms.shortestPath
   * Compute the shortest path between the specified source and target nodes.
   * @param {object} options
   * @param {Node|NodeId} options.source
   * @param {Node|NodeId} options.target
   * @param {boolean} [options.directed=false] Indicates if the graph should be considered as directed.
   * @param {Filter} [options.filter="visible"] Indicates on which elements to perform the algorithm.
   * @param {function(edge: Edge): number} [options.edgeCostFunction] Function retrieving the cost of an edge. By default, returns 1 for all edges.
   * @param {function(source: Node, target: Node): number} [options.heuristicFunction] Function retrieving an estimation
   * of the distance between two nodes. By default no heuristic is used.
   * @returns {Promise<null|{nodes: NodeList, edges: EdgeList}>} Shortest path. `nodes` has exactly one more node than `edges` has edges.
   * If there is no path, returns `null`.
   * @example
   * ogma.algorithms.shortestPath({
   *   source: 'nodeId1',
   *   target: 'nodeId2',
   *   edgeCostFunction: function(edge) {
   *     return edge.getData('cost');
   *   }
   * }).then(function(path) {
   *   if (path) {
   *     path.nodes.setAttributes({color: 'green'});
   *     path.edges.setAttributes({color: 'green'});
   *   }
   * });
   */
  shortestPath: (
    options: ShortestPathOptions<ND, ED>
  ) => Promise<null | Required<{
    nodes: NodeList<ND, ED>;
    edges: EdgeList<ED, ND>;
  }>>;
  /**
   * @method Ogma.algorithms.hasCycle
   * Checks whether the given graph has cycles in it.
   * @param  {Object}    [options]
   * @param  {NodeList}  [options.nodes] If omitted, the whole graph will be taken as input.
   * @param  {EdgeList}  [options.edges] If omitted, adjacent edges of the
   *                                     provided nodes are going to be used.
   * @return {Boolean}
   */
  hasCycle: (
    options?:
      | {
          nodes?: NodeList<any, any> | undefined;
          edges?: EdgeList<any, any> | undefined;
        }
      | undefined
  ) => boolean;
  /**
   * @method Ogma.algorithms.getAllSimpleCycles
   * Implements Tarjan's algorithm of finding all simple cycles in the directed graph.
   *
   * @param  {Object}    [options]
   * @param  {NodeList}  [options.nodes] If omitted, the whole graph will be taken as input.
   * @param  {EdgeList}  [options.edges] If omitted, adjacent edges of the
   *                                     provided nodes are going to be used.
   * @return {Array<NodeList>}
   */
  getAllSimpleCycles: (
    options?:
      | {
          nodes?: NodeList<ND, ED> | undefined;
          edges?: EdgeList<ED, ND> | undefined;
        }
      | undefined
  ) => NodeList<ND, ED>[];
  /**
   * @method Ogma.algorithms.detectCycle
   * Returns the first cycle found as a NodeList.
   *
   * @param  {Object}    [options]
   * @param  {NodeList}  [options.nodes] If omitted, the whole graph will be taken as input.
   * @param  {EdgeList}  [options.edges] If omitted, adjacent edges of the
   *                                     provided nodes are going to be used.
   * @return {NodeList|null}
   */
  detectCycle: (
    options?:
      | {
          nodes?: NodeList<any, any> | undefined;
          edges?: EdgeList<any, any> | undefined;
        }
      | undefined
  ) => null | NodeList<ND, ED>;
  /**
   * @method Ogma.algorithms.minimumSpanningTree
   * Kruskal's minimum-spanning-tree algorithm. It finds the edge set for the
   * graph of the least possible edge cost that connects all the nodes of
   * the graph.
   *
   * @example
   * ogma.algorithms.minimumSpanningTree({
   *   edgeCostFunction: function(edge) {
   *     return edge.getData('weight');
   *   }
   * }).then(function(trees) {
   *   trees.forEach(function(tree) {
   *     tree.nodes.setSelected(true);
   *     tree.edges.setSelected(true);
   *   });
   * });
   * @param {NodeList} [nodes] Nodes of the subgraph to analyze. By default uses all the visible nodes.
   * @param {EdgeList} [edges] Edges of the subgraph to analyze. By default all the visible edges.
   * @param {function(edge: Edge):number} [edgeCostFunction] Function to get the
   * weight of the edge, for instance it can take it from the data fields.
   * @return {Array<{nodes: NodeList, edges: EdgeList}>} List of minimum spanning trees of the graph
   */
  minimumSpanningTree: (
    options?:
      | {
          nodes?: NodeList<any, any> | NodeId[] | undefined;
          edges?: EdgeList<any, any> | EdgeId[] | undefined;
          edgeCostFunction?: ((e: Edge) => number) | undefined;
        }
      | undefined
  ) => SubGraph[];
  /**
   * @public
   * @method Ogma.algorithms.dfs
   * Depth first search.
   * @param {TraversalOptions} options
   * @example
   * const traversal = [];
   * ogma.algorithms.bfs({
   *   root: 'nodeId1',
   *   onNode: node => traversal.push(node.getId())
   * });
   */
  dfs: (options: TraversalOptions<ND, ED>) => void;
  /**
   * @public
   * @method Ogma.algorithms.bfs
   * Breadth first search.
   * @param {TraversalOptions} options
   *
   * @example
   * const traversal = [];
   * ogma.algorithms.bfs({
   *   root: 'nodeId1',
   *   onNode: node => traversal.push(node.getId())
   * });
   */
  bfs: (options: TraversalOptions<ND, ED>) => void;
}

/**
 * @public
 * if it's a node or an edge with their `isNode` property.
 */
declare type MouseButton = 'left' | 'right' | 'middle';
declare type InputSource = 'mouse' | 'touch';
declare type InputTarget<ND = any, ED = any> =
  | Node$1<ND, ED>
  | Edge<ED, ND>
  | null;
declare class CaptorAPI<ND, ED> {
  /**
   * @method Ogma.getHoveredElement
   * Returns the element that is currently hovered.
   * @return {Node|Edge|null}
   * @example
   * var element = ogma.getHoveredElement();
   * if (!element) {
   *   console.log('No element is hovered.');
   * } else if (element.isNode) {
   *   console.log('Node ' + element.getId() + ' is hovered.');
   * } else {
   *   console.log('Edge ' + element.getId() + ' is hovered.');
   * }
   */
  getHoveredElement(): Node$1<ND, ED> | Edge<ED, ND> | null;
  /**
   * @method Ogma.getPointerInformation
   * Returns information on the cursor.
   * @return {{x: number, y: number, target: Node|Edge|null}}
   */
  getPointerInformation(): {
    x: number;
    y: number;
    target: Node$1<ND, ED> | Edge<ED, ND> | null;
  };
}

declare class DomAPI<ND, ED> {
  /**
   * @method Ogma.setContainer
   * Set the DOM element used by this Ogma instance. If a string is specified,
   * the element will be looked up with `document.getElementById()`.
   * If the argument is `null`, then Ogma is removed from the current container.
   * @param {HTMLElement|string|null} elt
   * @example
   * var container = document.createElement('div');
   * document.body.appendChild(container);
   *
   * ogma.setContainer(container);
   */
  setContainer(elt: HTMLElement | string | null): void;
  /**
   * @method Ogma.getContainer
   * Returns the DOM element used by this Ogma instance.
   * @returns {HTMLElement|null}
   */
  getContainer(): HTMLElement | null;
}

declare enum MovementType {
  ZOOM = 'zoom',
  ROTATE = 'rotate',
  PAN = 'pan'
}

/**
 * @public
 * @property {NodeAttributesValue} [options.nodeAttributes]
 * @property {EdgeAttributesValue} [options.edgeAttributes]
 * @property {NodeSelector}        [options.nodeSelector]
 * @property {EdgeSelector}        [options.edgeSelector]
 * @property {NodeDependencies}    [options.nodeDependencies]
 * @property {EdgeDependencies}    [options.edgeDependencies]
 * @property {NodeOutput}          [options.nodeOutput]
 * @property {EdgeOutput}          [options.edgeOutput]
 */
interface NodeStyleRuleDefinition<ND, ED> {
  nodeAttributes?: NodeAttributesValue<ND, ED>;
  edgeAttributes?: EdgeAttributesValue<ED, ND>;
  nodeSelector?: NodeSelector<ND, ED>;
  edgeSelector?: EdgeSelector<ED, ND>;
  nodeDependencies?: NodeDependencies;
  edgeDependencies?: EdgeDependencies;
  nodeOutput?: NodeOutput;
  edgeOutput?: EdgeOutput;
}
declare type StyleRuleOptions<ND, ED> = {
  fullOverwrite?: boolean;
} & NodeStyleRuleDefinition<ND, ED>;
/**
 * @public
 * @class StyleRule
 */
declare class StyleRule<ND = any, ED = any> {
  /**
   * @method StyleRule.getId
   * Returns the unique positive integer rule id associated with the rule.
   * @returns {number}
   */
  getId(): number;
  /**
   * @method StyleRule.whenApplied
   * Call the specified function when the rule is applied for the first time.
   * @return {Promise<StyleRule>}
   * @example
   * var rule = ogma.styles.addRule({
   *   nodeAttributes: {
   *     text: function (node) {
   *       return node.getData('name');
   *     }
   *   }
   * });
   *
   * rule.whenApplied().then(function () {
   *   console.log('Attributes updated!');
   * });
   */
  whenApplied(): Promise<this>;
  /**
   * @method StyleRule.refresh
   * Refresh the rule for all nodes.
   * @return {Promise<void>}
   * @example
   * var myMapping = {
   *   person: 'red',
   *   country: 'blue',
   *   company: 'green'
   * };
   *
   * var rule = ogma.styles.addRule({
   *   nodeAttributes: {
   *     color: function (node) {
   *       return myMapping[node.getData('type')];
   *     }
   *   }
   * });
   *
   * // Change a variable referenced by the rule
   * myMapping.company = 'purple';
   *
   * // Manually refresh the rule
   * rule.refresh();
   */
  refresh(): Promise<void>;
  /**
   * @method StyleRule.getIndex
   * Retrieve the position of the rule in the internal rule list. Rules with a higher index are applied after rules
   * with a lower index.
   * @return {number}
   * @example
   * // Set rule 1 as less priority than rule 2
   * rule1.setIndex(rule2.getIndex());
   */
  getIndex(): number | null;
  /**
   * @method StyleRule.setIndex
   * Assign the position of the rule in the internal rule list. Rules with a higher index are applied after rules
   * with a lower index.
   * @param {number} index
   * @returns {Promise<void>}
   * @example
   * // Set rule 1 as less priority than rule 2
   * rule1.setIndex(rule2.getIndex());
   */
  setIndex(index: any): Promise<void>;
  /**
   * @method StyleRule.update
   * Updates the attributes and selectors associated with the rule.
   * @param options
   * @param {NodeAttributesValue} [options.nodeAttributes]
   * @param {EdgeAttributesValue} [options.edgeAttributes]
   * @param {boolean}             [options.fullOverwrite=false] Indicates if
   * the specified attributes should be merged with current ones (false) or if
   * the specified attributes should entirely replace the current ones.
   * @param {NodeSelector}        [options.nodeSelector]
   * @param {EdgeSelector}        [options.edgeSelector]
   * @param {NodeDependencies}    [options.nodeDependencies]
   * @param {EdgeDependencies}    [options.edgeDependencies]
   * @param {NodeOutput}          [options.nodeOutput]
   * @param {EdgeOutput}          [options.edgeOutput]
   * @returns {Promise<void>}
   */
  update(options: StyleRuleOptions<ND, ED>): Promise<void>;
  /**
   * @method StyleClass.getDefinition
   * Returns the attributes and selectors associated with the rule.
   * @returns {NodeStyleRuleDefinition}
   */
  getDefinition(): NodeStyleRuleDefinition<ND, ED>;
  /**
   * @method StyleRule.destroy
   * Delete the rule. After this is called, a call to any method on this object
   * will throw an error.
   * @return {Promise<void>}
   * @example
   * var rule = ogma.styles.addRule({
   *   nodeAttributes: {
   *     text: function (node) {
   *       return node.getData('name');
   *     }
   *   }
   * });
   *
   * rule.destroy();
   */
  destroy(): Promise<void>;
}

declare type AugmentedPointerEvent = PointerEvent & {
  touches?: PointerEvent[];
};

declare enum Buttons {
  LEFT = 'left',
  MIDDLE = 'middle',
  RIGHT = 'right'
}
/**
 * @extends Options
 * @property {object} [mouse]
 * @property {boolean} [mouse.enabled=true]                       Indicates if the mouse should be enabled
 * @property {boolean} [mouse.wheelEnabled=true]                  Indicates if the mouse wheel should be enabled.
 * @property {boolean} [mouse.disableWheelUntilMouseDown=false]   If true, the canvas will not take the focus of the mouse until the user clicks on it.
 * @property {boolean} [mouse.doubleClickTimer=500]               After a click, amount of time after which a second click won't trigger a double click event
 */
declare global {
  interface WheelEvent {
    readonly wheelDeltaY: number;
    readonly wheelDelta: number;
  }
}

declare type TypedListener<T> = (evt?: T) => void;
interface NodesDragEvent<ND, ED> {
  nodes: NodeList<ND, ED>;
  start: Point[];
  end: Point[];
}
interface DomEvent {
  domEvent: Event;
}
interface KeyboardEvent {
  domEvent: KeyboardEvent;
  key: number;
  code: number;
}
interface BasicMouseEvent {
  x: number;
  y: number;
  domEvent: MouseEvent;
}
interface BasicMouseButtonEvent extends BasicMouseEvent {
  button: MouseButton;
}
interface SourceTargetEvent<ND, ED> {
  source: InputSource;
  target: InputTarget<ND, ED>;
}
interface MouseButtonEvent<ND, ED>
  extends BasicMouseButtonEvent,
    SourceTargetEvent<ND, ED> {}
interface MouseMoveEvent extends BasicMouseEvent {
  dx: number;
  dy: number;
  source: InputSource;
}
interface MouseWheelEvent<ND, ED>
  extends BasicMouseEvent,
    SourceTargetEvent<ND, ED> {
  delta: number;
}
interface MouseOutEvent<ND, ED>
  extends BasicMouseEvent,
    SourceTargetEvent<ND, ED> {}
interface MouseOverEvent<ND, ED>
  extends BasicMouseEvent,
    SourceTargetEvent<ND, ED> {}
interface GestureProgressEvent<ND, ED>
  extends MouseMoveEvent,
    MouseButtonEvent<ND, ED> {}
interface BasicTouchEvent {
  domEvent: AugmentedPointerEvent;
}
interface TouchEvent extends BasicTouchEvent {
  x: number;
  y: number;
}
interface TouchButtonEvent extends TouchEvent {
  button: Buttons;
}
interface TouchMoveEvent extends TouchButtonEvent {
  dx: number;
  dy: number;
}
interface TouchProgressGestureEvent extends TouchMoveEvent {
  rotation: number;
  scale: number;
}
declare type RenderStateChangeEvent = RenderStateInfo;
interface NodesConnectionEvent<ND, ED> {
  source: Node$1<ND, ED>;
  target: Node$1<ND, ED>;
  edge: Edge<ED, ND>;
}
interface LayoutStartEvent {
  name: string;
  ids: NodeId[];
}
declare type LayoutCompleteEvent = {
  positions: {
    before: Point[];
    after: Point[];
  };
} & LayoutStartEvent;
interface LayoutComputedEvent {
  name: string;
}
interface LayoutComputedEvent {
  name: string;
  positions: {
    before: Point[];
    after: Point[];
  };
}
interface TransformationEvent<ND, ED> {
  target: Transformation<ND, ED>;
}
interface TransformationOrderEvent<ND, ED> extends TransformationEvent<ND, ED> {
  index: number;
}
interface TooltipEvent {
  tooltip: HTMLElement;
}
declare type TransformationEventListener<ND, ED> = (
  evt: TransformationEvent<ND, ED>
) => void;
interface StartZoomEvent {
  duration: number;
  easing: Easing;
  startZoom: number;
  endZoom: number;
}
interface NodesDragProgressEvent<ND, ED> extends NodesEvent<ND, ED> {
  dx: number;
  dy: number;
}
interface NodesDragEndEvent<ND, ED> extends NodesEvent<ND, ED> {
  start: Point[];
  end: Point[];
}
interface AnimateEvent<ND = any, ED = any> extends ElementsEvent<ND, ED> {
  duration: number;
  easing: Easing;
}
interface ViewChangedEvent {
  type: MovementType;
}
interface DropEvent extends DomEvent {
  x: number;
  y: number;
}
interface EmptyEvent {}
interface WheelEvent extends BasicMouseEvent {
  delta: number;
}
interface GestureEvent {
  domEvent: DomEvent;
}
interface ElementsEvent<ND, ED> {
  elements: NodeList<ND, ED> | EdgeList<ED, ND>;
}
interface NodesEvent<ND, ED> {
  nodes: NodeList<ND, ED>;
}
interface EdgesEvent<ED, ND> {
  edges: EdgeList<ED, ND>;
}
interface SubGraphEvent<ND, ED> {
  nodes: NodeList<ED, ND>;
  edges: EdgeList<ED, ND>;
}
interface AddNodesEvent<ND, ED> extends NodesEvent<ND, ED> {
  virtual: boolean;
  objects: any[];
}
interface AddEdgesEvent<ED, ND> extends EdgesEvent<ED, ND> {
  virtual: boolean;
  objects: any[];
}
interface PreAddElementsEvent {
  isNode: boolean;
  objects: any[];
}
interface GestureMoveEvent extends GestureEvent {
  x: number;
  y: number;
  scale: number;
  angle: number;
  rotation: number;
  dx: number;
  dy: number;
}
interface ResizeEvent {
  prevWidth: number;
  prevHeight: number;
  width: number;
  height: number;
  difWidth: number;
  difHeigh: number;
}
interface NodesDataChangeEvent<ND> {
  changes: NodesDataChange<ND>[];
}
interface EdgesDataChangeEvent<ED> {
  changes: EdgesDataChange<ED>[];
}
interface RenderStateChangedEvent {
  type: RendererType;
  state: RendererState;
  code: RendererErrorCode;
  message: string;
}
interface LayoutEndEvent extends LayoutComputedEvent {
  ids: NodeId[];
}
interface EventTypes<ND, ED> {
  /**
   * @public
   * @event mousemove
   * Event triggered when the user moves the mouse (or their finger in touch devices).
   * @property {number} x
   * @property {number} y
   * @property {number} dx
   * @property {number} dy
   * @property {InputSource} source
   * @property {Event} domEvent
   */
  mousemove: MouseMoveEvent;
  mousemoveInternal: MouseMoveEvent;
  /**
   * @public
   * @event mousedown
   * Event triggered when the user presses a mouse button. Also triggers as a left button when the user
   * presses their finger (on touch devices).
   * @property {number} x
   * @property {number} y
   * @property {InputSource} source
   * @property {MouseButton} button
   * @property {Event} domEvent
   */
  mousedown: MouseButtonEvent<ND, ED>;
  mousedownInternal: MouseButtonEvent<ND, ED>;
  /**
   * @public
   * @event mouseup
   * Event triggered when the user releases a mouse button. Also triggers as a left button when the user
   * releases their finger (on touch devices).
   * @property {number} x
   * @property {number} y
   * @property {MouseButton} button
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {Event} domEvent
   */
  mouseup: MouseButtonEvent<ND, ED>;
  mouseupInternal: MouseButtonEvent<ND, ED>;
  /**
   * @public
   * @event click
   * Event triggered when the user presses and releases a mouse button without moving in between.
   * Also triggers as a left button when the user presses and releases their finger (on touch devices).
   * @property {number} x
   * @property {number} y
   * @property {MouseButton} button
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {Event} domEvent
   */
  click: MouseButtonEvent<ND, ED>;
  clickInternal: MouseButtonEvent<ND, ED>;
  /**
   * @public
   * @event doubleclick
   * Event triggered when the user presses and releases a mouse button twice without moving in between.
   * @property {number} x
   * @property {number} y
   * @property {MouseButton} button
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {Event} domEvent
   */
  doubleclick: MouseButtonEvent<ND, ED>;
  doubleclickInternal: MouseButtonEvent<ND, ED>;
  /**
   * @public
   * @event mouseover
   * Event triggered when a node or edge is hovered.
   * @property {number} x
   * @property {number} y
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {Event} domEvent
   */
  mouseover: MouseOverEvent<ND, ED>;
  mouseoverInternal: MouseOverEvent<ND, ED>;
  /**
   * @public
   * @event mouseout
   * Event triggered when a node or edge stops being hovered.
   * @property {number} x
   * @property {number} y
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {Event} domEvent
   */
  mouseout: MouseOutEvent<ND, ED>;
  mouseoutInternal: MouseOutEvent<ND, ED>;
  /**
   * @public
   * @event mousewheel
   * Event triggered when the user uses the mouse wheel.
   * @property {number} x
   * @property {number} y
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {number} delta
   * @property {Event} domEvent
   */
  mousewheel: MouseWheelEvent<ND, ED>;
  mousewheelInternal: WheelEvent;
  keyup: KeyboardEvent;
  keydown: KeyboardEvent;
  /**
   * @public
   * @event dragStart
   * Event triggered when the user presses a mouse button and then moves the mouse (without
   * releasing the button).
   * @property {number} x
   * @property {number} y
   * @property {MouseButton} button
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {Event} domEvent
   */
  dragStart: MouseButtonEvent<ND, ED>;
  /**
   * @public
   * @event dragProgress
   * Event triggered every time the user moves the mouse after a `onDragStart` event has been emitted,
   * as long as the user doesn't release the mouse.
   * If a node or edge was under the cursor when the first `onDragStart` event was emitted, it is passed as the `target` property.
   * @property {number} x
   * @property {number} y
   * @property {MouseButton} button
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {Event} domEvent
   */
  dragProgress: GestureProgressEvent<ND, ED>;
  /**
   * @public
   * @event dragEnd
   * Event triggered when the user releases a mouse button, if a `onDragStart` has been emitted before.
   * @property {number} x
   * @property {number} y
   * @property {MouseButton} button
   * @property {InputSource} source
   * @property {InputTarget} target
   * @property {Event} domEvent
   */
  dragEnd: MouseButtonEvent<ND, ED>;
  /**
   * @public
   * @event gestureStart
   * Event triggered when the user touch the screen with two fingers.
   * @property {Event} domEvent
   */
  gestureStart: GestureEvent;
  /**
   * @public
   * @event gestureProgress
   * Event triggered when the users moves two fingers.
   * @property {number} x
   * @property {number} y
   * @property {number} scale
   * @property {number} angle
   * @property {number} dx
   * @property {number} dy
   * @property {Event} domEvent
   */
  gestureProgress: GestureMoveEvent;
  /**
   * @public
   * @event gestureEnd
   * Event triggered when the user stop touching the screen with two fingers.
   * @property {Event} domEvent
   */
  gestureEnd: GestureEvent;
  /**
   * @public
   * @event resize
   * @property {number}   prevWidth
   * @property {number}   prevHeight
   * @property {number}   width
   * @property {number}   height,
   * @property {number}   difWidth
   * @property {number}   difHeigh
   */
  resize: ResizeEvent;
  /**
   * @public
   * @event addNodes
   * Event triggered when some nodes are added to the graph.
   * @property {NodeList} nodes
   */
  addNodes: AddNodesEvent<ND, ED>;
  /**
   * @public
   * @event addEdges
   * Event triggered when some edges are added to the graph.
   * @property {EdgeList} edges
   */
  addEdges: AddEdgesEvent<ED, ND>;
  /**
   * @event preAddElements
   * Event triggered before elements are added to the graph
   * @property {EdgeList} edges
   */
  preAddElements: PreAddElementsEvent;
  nodeClassEvent: NodesEvent<ND, ED>;
  edgeClassEvent: NodesEvent<ND, ED>;
  /**
   * @public
   * @event nodesSelected
   * Event triggered when nodes are selected
   * @property {NodeList} nodes
   */
  nodesSelected: NodesEvent<ND, ED>;
  /**
   * @public
   * @event nodesUnselected
   * Event triggered when nodes are unselected
   * @property {NodeList} nodes
   */
  nodesUnselected: NodesEvent<ND, ED>;
  /**
   * @public
   * @event edgesSelected
   * Event triggered when edges are selected
   * @property {EdgeList} edges
   */
  edgesSelected: EdgesEvent<ED, ND>;
  /**
   * @public
   * @event edgesUnSelected
   * Event triggered when edges are unselected
   * @property {EdgeList} edges
   */
  edgesUnselected: EdgesEvent<ED, ND>;
  /**
   * @public
   * @event removeNodes
   * Event triggered when some nodes are removed from the graph.
   * @property {NodeList} nodes
   */
  removeNodes: NodesEvent<ND, ED>;
  /**
   * @public
   * @event removeEdges
   * Event triggered when some edges are removed from the graph.
   * @property {EdgeList} edges
   */
  removeEdges: EdgesEvent<ED, ND>;
  /**
   * @public
   * @event beforeRemoveNodes
   * Triggers right before the nodes are removed, but they are still in the
   * graph and their data is accessible.
   * @property {NodeList} nodes
   */
  beforeRemoveNodes: NodesEvent<ND, ED>;
  /**
   * @public
   * @event beforeRemoveEdges
   * Triggers right before the edges are removed, but they are still in the
   * graph and their data is accessible.
   * @property {EdgeList} edges
   */
  beforeRemoveEdges: EdgesEvent<ED, ND>;
  /**
   * @public
   * @event clearGraph
   * Event triggered when ogma.clearGraph is called.
   * @property {NodeList} nodes
   * @property {EdgeList} edges
   */
  clearGraph: SubGraphEvent<ND, ED>;
  /**
   * @public
   * @event rendererStateChange
   * Triggered when the renderer is requested, successfully initialized or encounters an error.
   * @property {RendererType} type
   * @property {RendererState} state
   * @property {RendererErrorCode} code
   * @property {string} message
   */
  rendererStateChange: RenderStateChangedEvent;
  /**
   * @public
   * @event updateNodeData
   * Trigger the specified function when the data of some nodes is updated.
   * @property {Array<{property: PropertyPath, nodes: NodeList, previousValues: Array<any>, newValues: Array<any>}>} changes
   * @example
   * ogma.events.on('updateNodeData', function (evt) {
   *   evt.changes.forEach(function (change) {
   *     console.log('Property ' + change.property.join('.') + ' changed for nodes ' + change.nodes.getId() + ':');
   *     change.nodes.forEach(function (node, index) {
   *       console.log('Previous value for node ' + node.getId() + ' was ' + change.previousValues[index]);
   *       console.log('New value for node ' + node.getId() + ' is ' + change.newValues[index]);
   *     });
   *   });
   */
  updateNodeData: NodesDataEvent<any>;
  /**
   * @public
   * @event updateEdgeData
   * Triggered when the data of some nodes is updated.
   * @property {changes: Array<{property: PropertyPath, edges: EdgeList, previousValues: Array<any>, newValues: Array<any>}>}} changes
   */
  updateEdgeData: EdgesDataEvent<any>;
  /**
   * @event startZoom
   * Triggered when camera starts zoom.
   * @property
   * @property  {number} duration
   * @property  {Easing} easing
   * @property  {number} startZoom
   * @property  {number} endZoom
   */
  startZoom: StartZoomEvent;
  /**
   * @public
   * @event viewChanged
   * Event triggered when a camera movement (zoom, panning, rotation) is finished.
   * @example
   * ogma.events.on('viewChanged', function() {
   *   console.log('zoomed and re-centered');
   * });
   *
   * ogma.view.setCenter({ x: 100, y: 100 });
   * ogma.view.setZoom(5);
   */
  viewChanged: ViewChangedEvent;
  cameraMove: EmptyEvent;
  cameraRotate: EmptyEvent;
  cameraPan: EmptyEvent;
  /**
   * @public
   * @event cameraZoom
   * Event triggered when zoom animation is in progress
   */
  cameraZoom: EmptyEvent;
  /**
   * @public
   * @event nodesDragStart
   * Triggered when the user starts to drag some nodes.
   * @property {NodeList} nodes
   * @example
   * ogma.events.on('nodesDragStart', function (evt) {
   *   console.log('User started to drag nodes ' + evt.nodes.getId());
   * });
   */
  nodesDragStart: NodesEvent<ND, ED>;
  /**
   * @public
   * @event nodesDragProgress
   * Triggered when the user drags some nodes.
   * @property {NodeList} nodes
   * @property {number} dx
   * @property {number} dy
   * @example
   * ogma.events.on('nodesDragProgress', function (evt) {
   *   console.log('User dragged nodes ' + evt.nodes.getId());
   * });
   */
  nodesDragProgress: NodesDragProgressEvent<ND, ED>;
  /**
   * @public
   * @event nodesDragEnd
   * Triggered when the user stop dragging some nodes.
   * @property {NodeList} nodes
   * @property {Array<{x: number, y: number}>} start
   * @property {Array<{x: number, y: number}>} end
   * @example
   * ogma.events.on('nodesDragEnd', function (evt) {
   *    console.log('User dragged node from ' + evt.start[index] + ' to ' + evt.end[index]);
   * });
   */
  nodesDragEnd: NodesDragEndEvent<ND, ED>;
  /**
   * @public
   * @event animate
   * Triggered when the animation is called on nodes or edges.
   * @property {NodeList|EdgeList} elements
   * @property {number} duration
   * @property {Easing} easing
   * @example
   * ogma.events.on('animate', function (evt) {
   *    console.log('User dragged node from ' + evt.start[index] + ' to ' + evt.end[index]);
   * });
   */
  animate: AnimateEvent<ND, ED>;
  documentMouseMove: MouseMoveEvent;
  documentMouseUp: BasicMouseButtonEvent;
  /**
   * @public
   * @event drop
   * Triggered when the user drops an element into the Ogma container. Note that x and y arguments are Graph coordinates.
   * @property {Event} domEvent
   * @property {number} x
   * @property {number} y
   * @example
   * ogma.events.on('drop', function ({domEvent, x, y}) {
   *  var id = domEvent.dataTransfer.getData('type');
   *   var url = domEvent.dataTransfer.getData('image');
   *   // tell the browser to copy the original element here
   *   domEvent.dataTransfer.dropEffect = "copy";
   *   // create a node on the graph to the exact x and y of the drop
   *   ogma.addNode({id: id, attributes: {x: x, y: y, image: url}});
   * });
   */
  drop: DropEvent;
  virtualDown: Omit<BasicMouseButtonEvent, 'domEvent'>;
  virtualUp: Omit<BasicMouseButtonEvent, 'domEvent'>;
  virtualMove: Omit<MouseMoveEvent, 'domEvent'>;
  virtualClick: Omit<BasicMouseButtonEvent, 'domEvent'>;
  virtualDoubleClick: Omit<BasicMouseButtonEvent, 'domEvent'>;
  virtualWheel: Omit<MouseWheelEvent<ND, ED>, 'domEvent'>;
  touchDown: TouchEvent;
  touchUp: TouchEvent;
  touchTap: TouchEvent;
  touchDoubleTap: TouchEvent;
  touchMove: TouchMoveEvent;
  touchStartGesture: BasicTouchEvent;
  touchProgressGesture: TouchProgressGestureEvent;
  touchEndGesture: BasicTouchEvent;
  documentTouchMove: EmptyEvent;
  documentTouchUp: EmptyEvent;
  /**
   * @public
   * @event geoLoaded
   * Triggered when the background map images are loaded
   * @example
   * ogma.events.on('geoLoaded', function() {
   *   console.log('the base map is loaded');
   * });
   * ogma.geo.enable();
   * // 'the base map is loaded'
   */
  geoLoaded: EmptyEvent;
  /**
   * @public
   * @event geoEnabled
   * Triggered when the geo mode is activated
   * @example
   * ogma.events.on('geoEnabled',function() {
   *   console.log('geo mode is on');
   * });
   * ogma.geo.enable();
   * // 'geo mode is on'
   */
  geoEnabled: EmptyEvent;
  /**
   * @public
   * @event geoDisabled
   * Triggered when the geo mode is switched off
   * @example
   * ogma.events.on('geoDisabled', function() {
   *   console.log('geo mode is off');
   * });
   * ogma.geo.disable();
   * // 'geo mode is off'
   */
  geoDisabled: EmptyEvent;
  geoReady: EmptyEvent;
  /**
   * @public
   * @event tooltipHide
   * Event triggered when a tooltip is hidden.
   * @param tooltip: HTMLElement
   */
  tooltipHide: TooltipEvent;
  /**
   * @public
   * @event tooltipShow
   * Event triggered when a tooltip is shown.
   * @param tooltip: HTMLElement
   * @example
   * ogma.events.on('tooltipShow', function (evt) {
   *   console.log('Tooltip shown:', evt.tooltip.innerHTML);
   * });
   */
  tooltipShow: TooltipEvent;
  /**
   * @public
   * @event connectNodes
   * Triggered when two nodes are connected using the module.
   * @param source: Node
   * @param target: Node
   * @param  edge: Edge
   * @example
   * ogma.events.on('connectNodes', function(evt) {
   *   evt.source.setAttributes({ text: 'Source'});
   *   evt.target.setAttributes({ text: 'Target'});
   *   evt.edge.setAttributes({ text: 'Connection'});
   * });
   */
  connectNodes: NodesConnectionEvent<ND, ED>;
  /**
   * @public
   * @event layoutStart
   * Triggered when two nodes are connected using the module.
   * @param name: string
   * @param ids: Array<NodeId>
   * @example
   * ogma.events.on('layoutStart', function(evt) {
   *   console.log('Running layout ', evt.name, 'on nodes', evt.ids.join(','));
   * });
   * ogma.layouts.forceLink();
   */
  layoutStart: LayoutStartEvent;
  /**
   * @public
   * @event layoutEnd
   * Trigger the specified function when two nodes are connected using the module.
   * @param name: string
   * @param ids: Array<NodeId>
   * @param positions: { before: Array<{x: number, y: number}>
   * @param  after: Array<{x: number, y: number}>
   * @example
   * ogma.events.on('layoutEnd', function(evt) {
   *   console.log('Layout ', evt.name, 'worked on nodes', evt.ids.join(','));
   * });
   * ogma.layouts.forceLink();
   */
  layoutEnd: LayoutEndEvent;
  /**
   * @public
   * @event layoutComputed
   * This event is fired after the layout algorithm has finished the calculations,
   * but before the positions are applied. Use it for UI interactions, because if
   * you would add position manipulations into the listener, they can interfere
   * with the layout results.
   * @param name: string
   * @example
   * ogma.events.on('layoutComputed', function(evt) {
   *   showProgressBar(evt.ids);
   * });
   * // hide the progress bar before the position animation starts
   * ogma.events.on('layoutComplete', function() {
   *   hideProgressBar();
   * });
   */
  layoutComputed: LayoutComputedEvent;
  lassoEnabled: EmptyEvent;
  lassoDisabled: EmptyEvent;
  /**
   * @public
   * @event transformationEnabled
   * Triggered when a transformation is activated
   * @param target: Transformation
   * @example
   * ogma.events.on('transformationEnabled', function({ target }) {
   *   console.log('Transformation', target.id, 'is enabled');
   * });
   * transformation.enable();
   * // 'Transformation 1 is on enabled'
   */
  transformationEnabled: TransformationEvent<ND, ED>;
  /**
   * @public
   * @event transformationDisabled
   * Triggered when a transformation is disabled
   * @param target: Transformation
   * @example
   * ogma.events.on('transformationDisabled', function({ target }) {
   *   console.log('Transformation', target.id, 'is enabled');
   * });
   * transformation.disable();
   * // 'Transformation 1 is on disabled'
   */
  transformationDisabled: TransformationEvent<ND, ED>;
  /**
   * @public
   * @event transformationSetIndex
   * Triggered when a transformation index is set
   * @param target: Transformation
   * @example
   * ogma.events.on('transformationSetIndex', function({ target, index }) {
   *   console.log('Transformation', target.id, 'is now at index', index);
   * });
   * transformation.setIndex(1);
   * // 'Transformation 2 is now at index 1'
   */
  transformationSetIndex: TransformationOrderEvent<ND, ED>;
  /**
   * @public
   * @event transformationDestroyed
   * Triggered when a transformation is destroyed
   * @param target: Transformation
   * @example
   * ogma.events.on('transformationDestroyed', function({ target }) {
   *   console.log('Transformation', target.id, 'is destroyed');
   * });
   * transformation.destroy();
   * // 'Transformation 1 is destroyed'
   */
  transformationDestroyed: TransformationEvent<ND, ED>;
  /**
   * @public
   * @event transformationRefresh
   * Triggered when a transformation is refreshed
   * @param target: Transformation
   * @example
   * ogma.events.on('transformationRefresh', function({ target }) {
   *   console.log('Transformation', target.id, 'has refreshed');
   * });
   * transformation.refresh();
   * // 'Transformation 1 has refreshed'
   */
  transformationRefresh: TransformationEvent<ND, ED>;
}
declare type EventMapKey<ND, ED> = keyof EventTypes<ND, ED>;
/**
 * Creates an intersection of event types for the multiple listeners
 */
declare type ComposedEventListener<T, U, K extends EventMapKey<T, U>[]> = {
  [I in keyof K]: (
    evt: EventTypes<T, U>[Extract<K[I], EventMapKey<T, U>>]
  ) => unknown;
}[number] extends (ev: infer I) => unknown
  ? (evt: I) => unknown
  : never;

declare class EventsAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.events.on
   * Listen to an event and call the listener function.
   * @param {string|string[]} eventName can be an event or an array of events
   * @param {function} listener
   * @example
   * const listener = function (evt) {
   *   console.log(evt.nodes.getId() + ' were dragged.');
   * }
   *
   * ogma.events.on("nodesDragEnd", listener);
   */
  on<K extends keyof EventTypes<ND, ED>>(
    type: K,
    listener: (ev: EventTypes<ND, ED>[K], evtName: K) => unknown
  ): this;
  on<K extends EventMapKey<ND, ED>[]>(
    type: readonly [...K],
    listener: ComposedEventListener<ND, ED, K>
  ): this;
  /**
   * @method Ogma.events.once
   * Listen to an event only once.
   * @param {string|string[]} eventName can be an event or an array of events
   * @param {function} listener
   * @example
   * var listener = function (evt) {
   *   console.log(evt.nodes.getId() + ' were dragged.');
   * }
   *
   * ogma.events.once("nodesDragEnd", listener);
   */
  once: <K extends keyof EventTypes<ND, ED>>(
    eventName: K,
    listener: (ev: EventTypes<ND, ED>[K], evtName: K) => any
  ) => this;
  /**
   * @method Ogma.events.off
   * Remove a listener from all events it was bound to.
   * @param {function} listener
   * @example
   * var listener = function (evt) {
   *   console.log(evt.nodes.getId() + ' were dragged.');
   * }
   *
   * ogma.events.on("nodesDragEnd", listener);
   * ogma.events.off(listener);
   */
  off(listener: (unknown: any) => unknown): this;
  /**
   * @deprecated
   * @method Ogma.events.off DEPRECATED see [#off](#Ogma-events-off)
   * Remove a listener from all events it was bound to.
   * @param {function} listener
   */
  removeListener: (listener: TypedListener<any>) => void;
  /**
   * @deprecated
   * @method Ogma.events.onNodesAdded DEPRECATED see [#Event:-addNodes](#Event:-addNodes)
   * Triggers the specified function when some nodes are added to the graph.
   * @param {function (evt: {nodes: NodeList})} listener
   */
  onNodesAdded: (listener: TypedListener<NodesEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onBeforeNodesRemoved DEPRECATED see [#Event:-beforeRemoveNodes](#Event:-beforeRemoveNodes)
   * Triggers right before the nodes are removed, but they are still in the
   * graph and their data is accessible.
   * @param {function (evt: {nodes: NodeList})} listener
   */
  onBeforeNodesRemoved: (listener: TypedListener<NodesEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @deprecated
   * @method Ogma.events.onNodesRemoved DEPRECATED: see [#Event:-removeNodes](#Event:-removeNodes) DEPRECATED see [#Event:-](#Event:-)
   * Triggers the specified function when some nodes are removed from the graph.
   * @param {function (evt: {nodes: NodeList})} listener
   */
  onNodesRemoved: (listener: TypedListener<NodesEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onEdgesAdded DEPRECATED see [#Event:-addEdges](#Event:-addEdges)
   * Triggers the specified function when some edges are added to the graph.
   * @param {function (evt: {edges: EdgeList})} listener
   */
  onEdgesAdded: (listener: TypedListener<EdgesEvent<ED, ND>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onBeforeEdgesRemoved DEPRECATED see [#Event:-beforeRemoveEdges](#Event:-beforeRemoveEdges)
   * Triggers right before the edges are removed, but they are still in the
   * graph and their data is accessible.
   * @param {function(evt: {edges: EdgeList})} listener
   */
  onBeforeEdgesRemoved: (listener: TypedListener<EdgesEvent<ED, ND>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onEdgesRemoved DEPRECATED see [#Event:-removeEdges](#Event:-removeEdges)
   * Triggers the specified function when some edges are removed from the graph.
   * @param {function (evt: {edges: EdgeList})} listener
   */
  onEdgesRemoved: (listener: TypedListener<EdgesEvent<ED, ND>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onGraphCleared DEPRECATED see [#Event:-clearGraph](#Event:-clearGraph)
   * Triggers the specified function when ogma.clearGraph is called.
   * @param {function (evt: {nodes: NodeList, edges: EdgeList})} listener
   */
  onGraphCleared: (
    listener: TypedListener<NodesEvent<ND, ED> | EdgesEvent<ED, ND>>
  ) => Ogma;
  /**
   * @method Ogma.events.onNodesClassAdded
   * Triggers the specified function when the specified class is added to some nodes.
   * @param {string} className
   * @param {function(evt: {nodes: NodeList})} listener
   * @example
   * ogma.styles.createClass({name: 'myCustomClass', nodeAttributes: {color: 'green'}});
   * ogma.events.onNodesClassAdded('myCustomClass', function (evt) {
   *   console.log('Nodes ' + evt.nodes.getId() + ' now have the class "myCustomClass".');
   * });
   *
   * ogma.getNodes(['n0', 'n1']).addClass('myCustomClass');
   */
  onNodesClassAdded: (
    className: string,
    listener: TypedListener<NodesEvent<ND, ED>>
  ) => Ogma;
  /**
   * @method Ogma.events.onNodesClassRemoved
   * Triggers the specified function when the specified class is removed from some nodes.
   * @param {string} className
   * @param {function(evt: {nodes: NodeList})} listener
   */
  onNodesClassRemoved: (
    className: string,
    listener: TypedListener<NodesEvent<ND, ED>>
  ) => Ogma;
  /**
   * @method Ogma.events.onEdgesClassAdded
   * Triggers the specified function when the specified class is added to some edges.
   * @param {string} className
   * @param {function(evt: {edges: EdgeList})} listener
   */
  onEdgesClassAdded: (
    className: string,
    listener: TypedListener<EdgesEvent<ED, ND>>
  ) => Ogma;
  /**
   * @method Ogma.events.onEdgesClassRemoved
   * Triggers the specified function when the specified class is removed from some edges.
   * @param {string} className
   * @param {function(evt: {edges: EdgeList})} listener
   */
  onEdgesClassRemoved: (
    className: string,
    listener: TypedListener<EdgesEvent<ED, ND>>
  ) => Ogma;
  /**
   * @extends Options
   * @property {object}       [interactions]
   * @property {object}       [interactions.drag]
   * @property {boolean}      [interactions.drag.enabled=true] Indicates if dragging nodes with the mouse should be enabled.
   * @property {CursorStyle}  [interactions.drag.cursor='move'] Cursor style to be applied while dragging the node
   */
  /**
   * @deprecated
   * @method Ogma.events.onNodeDragStart DEPRECATED see [#Event:-nodesDragStart](#Event:-nodesDragStart)
   * Triggered when the user starts to drag some nodes.
   * @param {function(evt: {nodes: NodeList})} listener
   * @example
   * ogma.events.onNodeDragStart(function (evt) {
   *   console.log('User started to drag nodes ' + evt.nodes.getId());
   * });
   * */
  onNodeDragStart: (listener: TypedListener<NodesEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onNodeDragProgress DEPRECATED see [#Event:-nodesDragProgress](#Event:-nodesDragProgress)
   * Triggered when the user drags some nodes.
   * @param {function(evt: {nodes: NodeList, dx: number, dy: number })} listener
   * @example
   * ogma.events.onNodeDragStart(function (evt) {
   *   console.log('User dragged nodes ' + evt.nodes.getId());
   * });
   */
  onNodeDragProgress: (
    listener: TypedListener<NodesDragProgressEvent<ND, ED>>
  ) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onNodeDragEnd DEPRECATED see [#Event:-nodesDragEnd](#Event:-nodesDragEnd)
   * Triggered when the user stop dragging some nodes.
   * @param {function(evt: {nodes: NodeList, start: Array<{x: number, y: number}>, end: Array<{x: number, y: number}>})} listener
   * @example
   * ogma.events.onNodeDragEnd(function (evt) {
   *   evt.nodes.forEach(function(node, index) {
   *     console.log('User dragged node from ' + evt.start[index] + ' to ' + evt.end[index]);
   *   });
   * });
   */
  onNodeDragEnd: (listener: any) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onDrop DEPRECATED see [#Event:-drop](#Event:-drop)
   * Triggered when the user drops an element into the Ogma container. Note that x and y arguments are Graph coordinates.
   * @param {function(evt: {domEvent: Event, x: number, y: number})} listener
   * @example
   * ogma.events.onDrop(function ({domEvent, x, y}) {
   *   var id = domEvent.dataTransfer.getData('type');
   *   var url = domEvent.dataTransfer.getData('image');
   *   // tell the browser to copy the original element here
   *   domEvent.dataTransfer.dropEffect = "copy";
   *   // create a node on the graph to the exact x and y of the drop
   *   ogma.addNode({id: id, attributes: {x: x, y: y, image: url}});
   * });
   */
  onDrop: (listener: TypedListener<DropEvent>) => Ogma;
  /**
   * @method Ogma.events.onKeyPress
   * Triggers the specified function when the specified key is pressed.
   * @param {KeyName|KeyCode|Array<KeyName|KeyCode>|string} key Key to listen to. Multiple keys can be specified; in
   * that case the function is triggered when the last key of the list is pressed, only if all the other keys are pressed.
   * @param {function(evt: {domEvent: Event})} listener
   * @example
   * // By specifying the key as a string (key identifier)
   * ogma.events.onKeyPress('b', function () { console.log('B was pressed.'); });
   *
   * // By specifying the JavaScript key code
   * ogma.events.onKeyPress(66, function () { console.log('B was pressed.'); });
   *
   * // By specifying a space-separated list of key identifiers
   * ogma.events.onKeyPress('ctrl b', function () { console.log('CTRL + B pressed.'); });
   *
   * // By specifying an array of key identifiers
   * ogma.events.onKeyPress(['ctrl', 'b'], function () { console.log('CTRL + B pressed.'); });
   *
   * // By specifying an array of JavaScript codes
   * ogma.events.onKeyPress([17, 66], function () { console.log('CTRL + B pressed.'); });
   */
  onKeyPress(
    key: KeyName | KeyCode | KeyCode[] | KeyName[] | string,
    listener: TypedListener<DomEvent>
  ): Ogma<ND, ED>;
  /**
   * @deprecated
   * @method Ogma.events.onNodesSelected DEPRECATED see [#Event:-nodesSelected](#Event:-nodesSelected)
   * Triggers the specified function when some nodes are selected.
   * @param {function(evt: {nodes: NodeList})} listener
   * @example
   * ogma.events.onNodesSelected(function (evt) {
   *   console.log('Nodes ' + evt.nodes.getId() + ' have just been selected.');
   * });
   */
  onNodesSelected: (listener: TypedListener<NodesEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onNodesUnselected DEPRECATED see [#Event:-nodesUnselected](#Event:-nodesUnselected)
   * Triggers the specified function when some nodes are removed from the selection.
   * @param {function(evt: {nodes: NodeList})} listener
   * @example
   * ogma.events.onNodesUnselected(function (evt) {
   *   console.log('Nodes ' + evt.nodes.getId() + ' have just been unselected.');
   * });
   */
  onNodesUnselected: (listener: TypedListener<NodesEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onEdgesSelected DEPRECATED see [#Event:-edgesSelected](#Event:-edgesSelected)
   * Triggers the specified function when some edges are selected.
   * @param {function(evt: {edges: EdgeList})} listener
   * @example
   * ogma.events.onEdgesSelected(function (evt) {
   *   console.log('Edges ' + evt.edges.getId() + ' have just been selected.');
   * });
   */
  onEdgesSelected: (listener: TypedListener<EdgesEvent<ED, ND>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onEdgesUnselected DEPRECATED see [#Event:-edgesUnselected](#Event:-edgesUnselected)
   * @param {function(evt: {edges: EdgeList})} listener
   * @example
   * ogma.events.onEdgesUnselected(function (evt) {
   *   console.log('Edges ' + evt.edges.getId() + ' have just been unselected.');
   * });
   */
  onEdgesUnselected: (listener: TypedListener<EdgesEvent<ED, ND>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onNodeDataChange DEPRECATED see [#Event:-updateNodeData](#Event:-updateNodeData)
   * Trigger the specified function when the data of some nodes is updated.
   * @param {function(evt: {changes: Array<{property: PropertyPath, nodes: NodeList, previousValues: Array<any>, newValues: Array<any>}>})} listener
   * @example
   * ogma.events.onNodeDataChange(function (evt) {
   *   evt.changes.forEach(function (change) {
   *     console.log('Property ' + change.property.join('.') + ' changed for nodes ' + change.nodes.getId() + ':');
   *     change.nodes.forEach(function (node, index) {
   *       console.log('Previous value for node ' + node.getId() + ' was ' + change.previousValues[index]);
   *       console.log('New value for node ' + node.getId() + ' is ' + change.newValues[index]);
   *     });
   *   });
   * });
   */
  onNodeDataChange: (listener: TypedListener<NodesDataChangeEvent<ND>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onEdgeDataChange DEPRECATED see [#Event:-updateEdgeData](#Event:-updateEdgeData)
   * Trigger the specified function when the data of some nodes is updated.
   * @param {function(evt: {changes: Array<{property: PropertyPath, edges: EdgeList, previousValues: Array<any>, newValues: Array<any>}>})} listener
   */
  onEdgeDataChange: (listener: TypedListener<EdgesDataChangeEvent<ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onAnimate DEPRECATED see [#Event:-animate](#Event:-animate)
   * Trigger the specified function when the animation is called on nodes or edges.
   * @param {function(evt: {elements: NodeList|EdgeList, duration: number, easing: Easing })} listener
   */
  onAnimate: (listener: TypedListener<AnimateEvent<ND, ED>>) => Ogma<ND, ED>;
  /**
   * @deprecated
   * @method Ogma.events.onMouseMove DEPRECATED see [#Event:-mousemove](#Event:-mousemove)
   * Triggers the specified function when the user moves the mouse (or their finger in touch devices).
   * @param {function(evt: {x: number, y: number, dx: number, dy: number, source: InputSource, domEvent: Event})} listener
   */
  onMouseMove: (listener: TypedListener<MouseMoveEvent>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onMouseButtonDown DEPRECATED see [#Event:-mousedown](#Event:-mousedown)
   * Triggers the specified function when the user presses a mouse button. Also triggers as a left button when the user
   * presses their finger (on touch devices).
   * @param {function(evt: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource, domEvent: Event})} listener
   */
  onMouseButtonDown: (
    listener: TypedListener<MouseButtonEvent<ND, ED>>
  ) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onMouseButtonUp DEPRECATED see [#Event:-mouseup](#Event:-mouseup)
   * Triggers the specified function when the user releases a mouse button. Also triggers as a left button when the user
   * releases their finger (on touch devices).
   * @param {function(evt: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource, domEvent: Event})} listener
   */
  onMouseButtonUp: (listener: TypedListener<MouseButtonEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onClick DEPRECATED see [#Event:-click](#Event:-click)
   * Triggers the specified function when the user presses and releases a mouse button without moving in between.
   * Also triggers as a left button when the user presses and releases their finger (on touch devices).
   * @param {function(evt: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource, domEvent: Event})} listener
   */
  onClick: (listener: TypedListener<MouseButtonEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onDoubleClick DEPRECATED see [#Event:-doubleclick](#Event:-doubleclick)
   * Triggers the specified function when the user presses and releases a mouse button two times without moving the mouse.
   * Also triggers as a left button when the user presses and releases their finger two times (on touch devices).
   * @param {function(evt: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource, domEvent: Event})} listener
   */
  onDoubleClick: (listener: TypedListener<MouseButtonEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onMouseWheel DEPRECATED see [#Event:-mousewheel](#Event:-mousewheel)
   * Triggers the specified function when the user uses the mouse wheel.
   * @param {function(evt: {x: number, y: number, delta: number, domEvent: Event})} listener `delta` is a number between -1 and 1.
   */
  onMouseWheel: (listener: TypedListener<MouseWheelEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onHover DEPRECATED see [#Event:-mouseover](#Event:-mouseover)
   * Triggers the specified function when a node or edge is hovered.
   * @param {function(evt: {x: number, y: number, target: InputTarget, domEvent: Event})} listener
   */
  onHover: (listener: TypedListener<MouseOverEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onUnhover DEPRECATED see [#Event:-mouseOut](#Event:-mouseOut)
   * Triggers the specified function when a node or edge stops being hovered.
   * @param {function(evt: {x: number, y: number, target: InputTarget, domEvent: Event})} listener
   */
  onUnhover: (listener: TypedListener<MouseOutEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onDragStart DEPRECATED see [#Event:-dragStart](#Event:-dragStart)
   * Triggers the specified function when the user presses a mouse button and then moves the mouse (without
   * releasing the button).
   * @param {function(evt: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource, domEvent: Event})} listener
   */
  onDragStart: (listener: TypedListener<MouseButtonEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onDragProgress DEPRECATED see [#Event:-dragProgress](#Event:-dragProgress)
   * Triggers the specified function every time the user moves the mouse after a `onDragStart` event has been emitted,
   * as long as the user doesn't release the mouse.
   * @param {function(evt: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource, domEvent: Event})} listener
   * If a node or edge was under the cursor when the first `onDragStart` event was emitted, it is passed as the `target` property.
   */
  onDragProgress: (
    listener: TypedListener<GestureProgressEvent<ND, ED>>
  ) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onDragEnd DEPRECATED see [#Event:-dragEnd](#Event:-dragEnd)
   * Triggers the specified function when the user releases a mouse button, if a `onDragStart` has been emitted before.
   * @param {function(evt: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource, domEvent: Event})} listener
   * If a node or edge was under the cursor when the first `onDragStart` event was emitted, it is passed as the `target` property.
   */
  onDragEnd: (listener: TypedListener<MouseButtonEvent<ND, ED>>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onGestureStart DEPRECATED see [#Event:-gestureStart](#Event:-gestureStart)
   * Triggers the specified function when the user touch the screen with two fingers.
   * @param {function(evt: {domEvent: Event})} listener
   */
  onGestureStart: (listener: TypedListener<GestureEvent>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onGestureProgress DEPRECATED see [#Event:-gestureProgress](#Event:-gestureProgress)
   * Triggers the specified function when the users moves two fingers.
   * @param {function(evt: {x: number, y: number, scale: number, angle: number, dx: number, dy: number, domEvent: Event})} listener
   */
  onGestureProgress: (listener: TypedListener<GestureMoveEvent>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onGestureEnd DEPRECATED see [#Event:-gestureEnd](#Event:-gestureEnd)
   * Triggers the specified function when the user stop touching the screen with two fingers.
   * @param {function(evt: {domEvent: Event})} listener
   */
  onGestureEnd: (listener: TypedListener<GestureEvent>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onRendererStateChange DEPRECATED see [#Event:-rendererStateChange](#Event:-rendererStateChange)
   * Triggered when the renderer is requested, successfully initialized or encounters an error.
   * @param {function (evt: {type: RendererType, state: RendererState, code: RendererErrorCode, message: string})} listener
   */
  onRendererStateChange: (
    listener: TypedListener<RenderStateChangeEvent>
  ) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onZoomProgress DEPRECATED see [#Event:-cameraZoom](#Event:-cameraZoom)
   * Triggers the specified function when zoom animation is in progress
   * @param {function()} listener
   */
  onZoomProgress: (listener: () => void) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onViewChanged DEPRECATED see [#Event:-viewChanged](#Event:-viewChanged)
   * Triggers the specified function when a camera movement (zoom, panning, rotation) is finished.
   * @param {function()} listener
   *
   * @example
   * ogma.events.onViewChanged(function() {
   *   console.log('zoomed and re-centered');
   * });
   *
   * ogma.view.setCenter({ x: 100, y: 100 });
   * ogma.view.setZoom(5);
   */
  onViewChanged: (listener: () => void) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onNodesConnected DEPRECATED see [#Event:-connectNodes](#Event:-connectNodes)
   * Trigger the specified function when two nodes are connected using the module.
   * @param {function(evt: {source: Node, target: Node, edge: Edge })} listener
   *
   * @example
   * ogma.events.onNodesConnected(function(evt) {
   *   evt.source.setAttributes({ text: 'Source'});
   *   evt.target.setAttributes({ text: 'Target'});
   *   evt.edge.setAttributes({ text: 'Connection'});
   * });
   */
  onNodesConnected: (
    listener: TypedListener<NodesConnectionEvent<ND, ED>>
  ) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onGeoModeEnabled DEPRECATED see [#Event:-geoEnabled](#Event:-geoEnabled)
   * Triggered when the geo mode is activated
   * @param {function()} listener
   *
   * @example
   * ogma.events.onGeoModeEnabled(function() {
   *   console.log('geo mode is on');
   * });
   * ogma.geo.enable();
   * // 'geo mode is on'
   */
  onGeoModeEnabled: (listener: () => void) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onGeoModeDisabled DEPRECATED see [#Event:-geoDisabled](#Event:-geoDisabled)
   * Triggered when the geo mode is switched off
   * @param {function()} listener
   *
   * @example
   * ogma.events.onGeoModeDisabled(function() {
   *   console.log('geo mode is off');
   * });
   * ogma.geo.disable();
   * // 'geo mode is off'
   */
  onGeoModeDisabled: (listener: () => void) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onGeoModeLoaded DEPRECATED see [#Event:-geoLoaded](#Event:-geoLoaded)
   * Triggered when the background map images are loaded
   * @param {function()} listener
   *
   * @example
   * ogma.events.onGeoModeLoaded(function() {
   *   console.log('the base map is loaded');
   * });
   * ogma.geo.enable();
   * // 'the base map is loaded'
   */
  onGeoModeLoaded: (listener: () => void) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onLayoutStart DEPRECATED see [#Event:-layoutStart](#Event:-layoutStart)
   * @param {function(evt: { name: string, ids: Array<NodeId>})} listener
   *
   * @example
   * ogma.events.onLayoutStart(function(evt) {
   *   console.log('Running layout ', evt.name, 'on nodes', evt.ids.join(','));
   * });
   * ogma.layouts.forceLink();
   */
  onLayoutStart: (listener: TypedListener<LayoutStartEvent>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onLayoutComplete DEPRECATED see [#Event:-layoutEnd](#Event:-layoutEnd)
   * @param {function(evt: { name: string, ids: Array<NodeId>, positions: { before: Array<{x: number, y: number}>, after: Array<{x: number, y: number}>}})} listener
   *
   * @example
   * ogma.events.onLayoutComplete(function(evt) {
   *   console.log('Layout ', evt.name, 'worked on nodes', evt.ids.join(','));
   * });
   * ogma.layouts.forceLink();
   */
  onLayoutComplete: (listener: TypedListener<LayoutEndEvent>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onLayoutComputed DEPRECATED see [#Event:-layoutComputed](#Event:-layoutComputed)
   *
   * This event is fired after the layout algorithm has finished the calculations,
   * but before the positions are applied. Use it for UI interactions, because if
   * you would add position manipulations into the listener, they can interfere
   * with the layout results.
   *
   * @param {function(payload: { name: string })} listener
   *
   * @example
   * ogma.events.onLayoutStart(function(evt) {
   *   showProgressBar(evt.ids);
   * });
   * // hide the progress bar before the position animation starts
   * ogma.events.onLayoutComplete(function() {
   *   hideProgressBar();
   * });
   */
  onLayoutComputed: (listener: TypedListener<LayoutComputedEvent>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onTooltipShown DEPRECATED see [#Event:-tooltipShow](#Event:-tooltipShow)
   * Triggers the specified function when a tooltip is shown.
   * @param {function (evt: {tooltip: HTMLElement})} listener
   * @example
   * ogma.events.onTooltipShown(function (evt) {
   *   console.log('Tooltip shown:', evt.tooltip.innerHTML);
   * });
   */
  onTooltipShown: (listener: TypedListener<TooltipEvent>) => Ogma;
  /**
   * @deprecated
   * @method Ogma.events.onTooltipHidden DEPRECATED see [#Event:-tooltipHide](#Event:-tooltipHide)
   * Triggers the specified function when a tooltip is hidden.
   * @param {function (evt: {tooltip: HTMLElement})} listener
   */
  onTooltipHidden: (listener: (evt: TooltipEvent) => void) => Ogma;
  /**
   * @public
   * @deprecated
   * @method Ogma.events.onTransformationEnabled DEPRECATED see [#Event:-transformationEnabled](#Event:-transformationEnabled)
   * Triggered when a transformation is activated
   * @param {function({ target: Transformation }):void} listener
   *
   * @example
   * ogma.events.onTransformationEnabled(function({ target }) {
   *   console.log('Transformation', target.id, 'is enabled');
   * });
   * transformation.enable();
   * // 'Transformation 1 is on enabled'
   */
  onTransformationEnabled: (
    listener: TransformationEventListener<ND, ED>
  ) => Ogma<ND, ED>;
  /**
   * @deprecated
   * @method Ogma.events.onTransformationDisabled DEPRECATED see [#Event:-transformationDisabled](#Event:-transformationDisabled)
   * Triggered when a transformation is disabled
   * @param {function({ target: Transformation }):void} listener
   *
   * @example
   * ogma.events.onTransformationDisabled(function({ target }) {
   *   console.log('Transformation', target.id, 'is enabled');
   * });
   * transformation.disable();
   * // 'Transformation 1 is on disabled'
   */
  onTransformationDisabled: (
    listener: TransformationEventListener<ND, ED>
  ) => Ogma<ND, ED>;
  /**
   * @deprecated
   * @method Ogma.events.onTransformationSetIndex DEPRECATED see [#Event:-transformationSetIndex](#Event:-transformationSetIndex)
   * Triggered when a transformation index is set
   * @param {function({ target: Transformation, index: number }):void} listener
   *
   * @example
   * ogma.events.onTransformationSetIndex(function({ target, index }) {
   *   console.log('Transformation', target.id, 'is now at index', index);
   * });
   * transformation.setIndex(1);
   * // 'Transformation 2 is now at index 1'
   */
  onTransformationSetIndex: (
    listener: (evt: TransformationOrderEvent<ND, ED>) => void
  ) => Ogma<ND, ED>;
  /**
   * @deprecated
   * @method Ogma.events.onTransformationDestroyed DEPRECATED see [#Event:-transformationDestroyed](#Event:-transformationDestroyed)
   * Triggered when a transformation  is destroyed
   * @param {function({ target: Transformation }):void} listener
   *
   * @example
   * ogma.events.onTransformationDestroyed(function({ target }) {
   *   console.log('Transformation', target.id, 'is destroyed');
   * });
   * transformation.destroy();
   * // 'Transformation 1 is destroyed'
   */
  onTransformationDestroyed: (
    listener: TransformationEventListener<ND, ED>
  ) => Ogma<ND, ED>;
  /**
   * @deprecated
   * @method Ogma.events.onTransformationRefreshed DEPRECATED see [#Event:-transformationRefresh](#Event:-transformationRefresh)
   * Triggered when a transformation index is set
   * @param {function({ target: Transformation }):void} listener
   *
   * @example
   * ogma.events.onTransformationRefreshed(function({ target }) {
   *   console.log('Transformation', target.id, 'has refreshed');
   * });
   * transformation.refresh();
   * // 'Transformation 1 has refreshed'
   */
  onTransformationRefreshed: (
    listener: TransformationEventListener<ND, ED>
  ) => Ogma<ND, ED>;
}

interface ExportOptions {
  download?: boolean;
  filename?: string;
}
interface VisualExportOptions extends ExportOptions {
  texts?: boolean;
  badges?: boolean;
  filter?: Filter;
  preventOverlap?: boolean;
}
interface DataExportOptions extends ExportOptions {
  nodes?: NodeCollection;
  edges?: EdgeCollection;
  nodeData?: (data: any) => any;
  edgeData?: (data: any) => any;
  filter?: Filter;
  styles?: 'all' | 'none' | 'original';
}

interface CSVExportOptions extends DataExportOptions {
  what?: 'nodes' | 'edges';
  dataProperties?: PropertyPath[];
  separator?: string;
  textSeparator?: '"' | "'";
}

interface GexfExportOptions extends DataExportOptions {
  creator?: string;
  description?: string;
}

interface GraphMLExportOptions extends DataExportOptions {
  graphId?: string;
  directedEdges?: boolean;
}

interface JSONExportOptions extends ExportOptions {
  nodeAttributes?: NodeAttributesKeys[] | 'all';
  edgeAttributes?: EdgeAttributesKeys[] | 'all';
  nodeData?: (data: any) => any;
  edgeData?: (data: any) => any;
  filter?:
    | Filter
    | {
        nodes: NodeCollection;
        edges: EdgeCollection;
      };
  pretty?: boolean;
  anonymize?: boolean;
}

/**
 * @public
 * @property {"bottom"|"top"|"left"|"right"} [position="bottom"] Position of the legend on the canvas.
 * @property {number} [widgetWidth=130] Width of a widget, in pixels
 * @property {string} [fontFamily="Arial"] Font used to display the widgets
 * @property {number} [fontSize=10] Font size used to display the widgets' content
 * @property {Color} [fontColor="black"] Font color used to display the widgets' content
 * @property {number} [titleFontSize=12] Font size used to display the widgets' title
 * @property {Color} [titleFontColor="black"] Font color used to display the widgets' title
 * @property {number} [titleMaxLength=20] If a widget's title has more characters that this value, it will be truncated
 * @property {"left"|"center"} [titleTextAlign="left"] Alignment of the widgets' title
 * @property {Color} [shapeColor="grey"] Color used for displaying the widget indicating a node or edge shape
 * @property {Color} [backgroundColor="white"] Background color of the widgets.
 * @property {Color} [borderColor="black"] Border color of the widgets.
 * @property {number} [borderRadius=0] Border radius of the widgets.
 * @property {number} [borderWidth=1] Border width of the widgets, in pixels.
 * @property {number} [innerMargin=10] Blank space between a widget's border and its content, in pixels.
 * @property {number} [outerMargin=5] Blank space between two widgets, in pixels.
 * @property {number} [circleStrokeWidth=3] Stroke width of the circles used to indicate the size of the nodes.
 * @property {function(propertyPath: Array<string>): string} [titleFunction] Given a property path, must return
 * the title of the widget which displays information on that property. By default keep the last part of the
 * property path.
 */
interface LegendOptions {
  position?: 'bottom' | 'top' | 'left' | 'right';
  widgetWidth?: number;
  fontFamily?: string;
  fontSize?: number;
  fontColor?: Color;
  titleFontSize?: number;
  titleFontColor?: Color;
  titleMaxLength?: number;
  titleTextAlign?: 'left' | 'center';
  shapeColor?: Color;
  backgroundColor?: Color;
  borderColor?: Color;
  borderRadius?: number;
  borderWidth?: number;
  innerMargin?: number;
  outerMargin?: number;
  circleStrokeWidth?: number;
  titleFunction?: (propertyPath: PropertyPath) => string;
}
declare class LegendAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.legend.enable
   * Enable the legend. Provides indications on the meaning of the color, size, shape, image and icon of nodes
   * and edges.
   *
   * <bold>Important! In order to be generated for a specific attribute (color, size, etc), the following
   * requirements must be met:</bold>
   * <ul>
   *   <li>There must be exactly one rule for that attribute. If there are multiple rules for an attribute, only
   *   the first one is taken into account (which may lead to an incorrect legend)</li>
   *   <li>This rule must have been created with `ogma.rules.map()` or `ogma.rules.slice()`. If it's not the
   *   case, the widget for this attribute will not be shown.</li>
   * </ul>
   *
   * @param {LegendOptions} [options]
   * @returns {Promise<void>}
   * @example
   * var colorRule = ogma.rules.map({
   *   field: 'country',
   *   values: {
   *     France: 'blue',
   *     Italy: 'green',
   *     Spain: 'red'
   *   },
   *   fallback: 'black'
   * });
   *
   * ogma.styles.addNodeRule({
   *   color: colorRule
   * });
   *
   * ogma.tools.legend.enable({
   *   position: 'left',
   *   borderColor: 'grey',
   *   titleFunction: function (propertyPath) {
   *     // propertyPath is an array
   *     return propertyPath.join('.');
   *   }
   * });
   */
  enable: (options?: LegendOptions | undefined) => Promise<void>;
  /**
   * @method Ogma.tools.legend.disable
   * Disable the legend.
   * @return {Promise<void>}
   * @example
   * ogma.tools.legend.disable();
   */
  disable: () => Promise<void>;
  /**
   * @method Ogma.tools.legend.enabled
   * Indicates if the legend is enabled.
   * @return {boolean}
   * @example
   * console.log(ogma.tools.legend.enabled());
   */
  enabled: () => boolean;
  /**
   * @method Ogma.tools.legend.getOptions
   * Get Legend settings.
   * @return {LegendOptions}
   */
  getOptions: () => LegendOptions;
  /**
   * @method Ogma.tools.legend.export
   * @param {LegendOptions & Size} [settings]
   * @return {Promise<HTMLCanvasElement>}
   * Exports legend contents on a Canvas element
   */
  export: (
    settings?: (LegendOptions & Partial<Size>) | undefined
  ) => Promise<HTMLCanvasElement>;
}

/**
 * @public
 * @property {boolean}          [clip=false] If `true`, export the current view rather than the whole graph
 * @property {number}           [width] If not specified, the width of the canvas will be used.
 * @property {number}           [height] If not specified, the height of the canvas will be used.
 * @property {number}           [margin=10] Blank space around the graph (in pixels)
 * @property {Color}            [background] Color of the background on the output image
 * @property {boolean}          [texts=true]                    Whether or not to export texts
 * @property {boolean}          [preventOverlap=true]          If true, hide texts which overlap, else display labels which are already present on screen
 * @property {boolean}          [images=true]                   Whether or not to export images
 * @property {boolean}          [badges=true]                   Whether or not to export badges
 * @property {"visible"|"all"}  [filter="visible"]              Indicates what elements to export.
 * @property {object}           [textWatermark]
 * @property {string}           [textWatermark.content]           Content of the text watermark
 * @property {string}           [textWatermark.fontFamily="Arial"]  Font used to display the text watermark
 * @property {number}           [textWatermark.fontSize=48]       Size of the text watermark
 * @property {"bold"|"italic"}  [textWatermark.fontStyle] Style to use to display the text watermark
 * @property {Color}            [textWatermark.fontColor="red"]    Color to use to display the text watermark
 * @property {boolean}          [textWatermark.repeat=false]     Indicates if the watermark should be repeated over the image
 * @property {number}           [textWatermark.angle=0]           Angle of the watermark (in degrees)
 * @property {number}           [textWatermark.alpha=0.65]        Transparency of the watermark, from 0 to 1 (0 = fully transparent)
 * @property {number}           [textWatermark.space=50]          If repeating the watermark, space in pixels between the repetitions
 * @property {number}           [textWatermark.x]                 X coordinate of the center of the watermark
 * @property {number}           [textWatermark.y]                 Y coordinate of the center of the watermark
 * @property {object}           [imageWatermark]
 * @property {string}           [imageWatermark.url]              Url of the image to use as watermark
 * @property {string}           [imageWatermark.width]            If not specified, the original width of the image will be used.
 * @property {string}           [imageWatermark.height]           If not specified, the original width of the image will be used.
 * @property {string}           [imageWatermark.repeat=false]     Indicates if the watermark should be repeated over the image
 * @property {string}           [imageWatermark.angle=0]          Angle of the watermark (in degrees)
 * @property {string}           [imageWatermark.alpha=0.65]       Transparency of the watermark, from 0 to 1 (0 = fully transparent)
 * @property {string}           [imageWatermark.space=50]         If repeating the watermark, space in pixels between the repetitions
 * @property {string}           [imageWatermark.x]                X coordinate of the center of the watermark
 * @property {string}           [imageWatermark.y]                Y coordinate of the center of the watermark
 * @property {boolean}          [download=true] If true, the user will be prompted a modal window so he can download the exported graph.
 * @property {string}           [filename="graph.png"] If `download` is true, the default name for the downloaded file.
 * @property {boolean|LegendOptions} [legend] If unspecified and the legend is enabled, it will be exported with the current options.
 * If unspecified and the legend is not enabled, it will not be exported. If `false`, the legend will not be exported no matter what.
 * If `true`, the legend will be exported with the default options, whether it's enabled or not. If an object is specified,
 * the legend will be exported with the specified options, whether it's enabled or not.
 * @property {string}           [imageCrossOrigin]                In case node or badge images are coming from a CDN, set this to
 *                                                              'anonymous' to avoid security errors on export.
 * @property {number}           [pixelRatio] Image resolution. Defaults to your screen resolution, so on high-resolution screens the exported image will be scaled up to maintain the resolution.
 */
interface ImageExportOptions extends VisualExportOptions {
  images?: boolean;
  clip?: boolean;
  width?: number;
  height?: number;
  margin?: number;
  background?: Color;
  legend?: boolean | LegendOptions;
  imageCrossOrigin?: CrossOriginValue;
  imageWatermark?: {
    x?: number;
    y?: number;
    space?: number;
    angle?: number;
    alpha?: number;
    repeat?: boolean;
    width?: number;
    height?: number;
    url?: string;
  };
  textWatermark?: {
    x?: number;
    y?: number;
    angle?: number;
    space?: number;
    alpha?: number;
    repeat?: boolean;
    content: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: 'bold' | 'italic';
    fontColor?: Color;
  };
  pixelRatio?: number;
}

interface SVGExportOptions extends VisualExportOptions {
  width?: number;
  height?: number;
  clip?: boolean;
  margin?: number;
  background?: Color;
  images?: boolean;
  embedFonts?: boolean;
  groupSemantically?: boolean;
  prefix?: string;
}

interface XLSXExportOptions extends ExportOptions {
  what?: 'nodes' | 'edges';
  dataProperties?: PropertyPath[];
  filter?: Filter;
  nodes?: NodeCollection;
  edges?: EdgeCollection;
  tab?: {
    nodes: (node: Node$1) => string | string[] | undefined;
    edges: (edge: Edge) => string | string[] | undefined;
  };
  nodeData?: (data: any, allTabs: string[]) => object | object[] | undefined;
  edgeData?: (data: any, allTabs: string[]) => object | object[] | undefined;
}

declare class ExportsAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.export.csv
   * @param {object|"nodes"|"edges"} parameters
   * @param {"nodes"|"edges"} parameters.what Indicates if nodes or edges should be exported.
   * @param {Array<PropertyPath>} [parameters.dataProperties] Data properties to export. If not specified, exports all data properties.
   * @param {string} [parameters.separator=","] Column separator
   * @param {'"'|"'"} [parameters.textSeparator='"'] String used to surround strings. Can only be `"` or `'`.
   * @param {NodeCollection} [parameters.nodes] Nodes to export. By default export all the nodes (if `what` is `"nodes"`).
   * @param {EdgeCollection} [parameters.edges] Edges to export. By default export all the edges (if `what` is `"edges"`).
   * @param {function (data: any): any} [parameters.nodeData] Given a node data in input, must return the object to export as data. By default export the whole node data untouched.
   * @param {function (data: any): any} [parameters.edgeData] Given an edge data in input, must return the object to export as data. By default export the whole edge data untouched.
   * @param {Filter} [parameters.filter="visible"] Indicates what elements to export.
   * @param {boolean} [parameters.download=true] If true, the user will be prompted a modal window so he can download the exported graph.
   * @param {string} [parameters.filename="graph.csv"] If `download` is true, the default name for the downloaded file.
   * @return {Promise<string>}
   *
   * @example
   * // export only nodes with higher degree
   * console.log(ogma.getNode('n2').getData());
   * // { properties: { foo: 1, bar: 2 } }
   * ogma.export.csv({
   *   nodes: ogma.getNodes(function(node) {
   *     return node.getDegree() > 2;
   *   }),
   *   dataProperties: ['customerProperties', ['a', 'single', 'nested', 'property'], 'another.nested.property', ['property.containing.dots']],
   *   download: false,
   *   what: 'nodes'
   * }).then(function(csv) {
   *   console.log(csv);
   *   // "id","foo","bar"
   *   // "0","1","2"
   * })
   */
  csv: (options: CSVExportOptions) => Promise<string>;
  /**
   * @method Ogma.export.xlsx
   * Requires the xlsx library to be included (if browser) or to be available through 'require' (if Node.js)
   * @param {object|"nodes"|"edges"} [parameters]
   * @param {"nodes"|"edges"} [parameters.what] If a value is specified, only nodes or edges will be exported, not both.
   * @param {Array<PropertyPath>} [parameters.dataProperties] Data properties to export. If not specified, exports all data properties. Deprecated : use `nodeData` and `edgeData` instead.
   * @param {Filter} [parameters.filter="visible"] Indicates what elements to export.
   * @param {NodeCollection} [parameters.nodes] Nodes to export. By default export all the nodes. When set it overwrites "filter" configuration.
   * @param {EdgeCollection} [parameters.edges] Edges to export. By default export all the edges. When set it overwrites "filter" configuration.
   * @param {boolean} [parameters.download=true] If true, the user will be prompted a modal window so he can download the exported graph. Browser only.
   * @param {string} [parameters.filename="graph.xlsx"] If `download` is true, the default name for the downloaded file.
   * @param {object} [parameters.tab] Indicates how to name the tabs in the XSLX tabs. When not defined it will exports a "nodes" and a "edges" tab.
   *   **Note**: tab names cannot contain some characters in Excel, for more information please see: [naming conventions for worksheets](http://www.excelcodex.com/2012/06/worksheets-naming-conventions/) .
   * @param {function(node: Node): string|Array<string>|undefined} [parameters.tab.nodes = function(node: Node): "nodes"] The returned string indicates the name of the tab (or tabs) to use for the node. When `undefined` is returned it defaults to "nodes".
   * @param {function(edge: Edge): string|Array<string>|undefined} [parameters.tab.edges = function(edge: Edge): "edges"] The returned string indicates the name of the tab (or tabs) to use for the edge. When `undefined` is returned it defaults to "edges".
   * @param {function(data: any, allTabs: Array<string>): object|Array<object>|undefined} [parameters.nodeData] Indicates how to format the node data for the tab: each key of the returned `object` is used as `columnName` and its value as `columnValue`. In case of multiple tabs for the node, an array of objects will be expected.
   * The `allTabs` array is passed to give some context to the formatting. The default is use the data object "flatten" all his properties. When set it overwrites `dataProperties` configuration.
   * @param {function(data: any, allTabs: Array<string>): object|Array<object>|undefined} [parameters.edgeData] Indicates how to format the edge data for the tab: each key of the returned `object` is used as `columnName` and its value as `columnValue`. In case of multiple tabs for the edge, an array of objects will be expected.
   * The `allTabs` array is passed to give some context to the formatting. The default is use the data object "flatten" all his properties. When set it overwrites `dataProperties` configuration.
   * @return {Promise<Blob>}
   *
   * @example
   * var filename = "file.xlsx";
   * ogma.export.xlsx({ filename: filename, filter: "visible" }).then(function() {
   *   console.log('Visible graph exported into', filename)
   * });
   *
   * @example
   * // Advanced example where tabs are based on nodes and edges properties
   * var filename = "file.xlsx";
   * ogma.export.xlsx({
   *   filename: filename,
   *   tab: {
   *     nodes: function(node){ return node.getData("type"); },
   *     edges: function(edge){ return edge.getData("type"); },
   *   }
   * }).then(function() {
   *   console.log('Graph exported: 1 tab for each node and edge type into', filename)
   * });
   *
   *
   * @demo export-excel
   * @demo export-excel-advanced
   */
  xlsx: (options: XLSXExportOptions) => Promise<Blob>;
  /**
   * @method Ogma.export.gexf
   * @param {object} [parameters]
   * @param {string} [parameters.creator] Name of the creator, that will be specified in the output file
   * @param {string} [parameters.description] Description of the graph, that will be specified in the output file
   * @param {NodeCollection} [parameters.nodes] Nodes to export. By default export all the nodes.
   * @param {EdgeCollection} [parameters.edges] Edges to export. By default export all the edges.
   * @param {function (data: any): any} [parameters.nodeData] Given a node data in input, must return the object to export as data. By default export the whole node data untouched.
   * @param {function (data: any): any} [parameters.edgeData] Given an edge data in input, must return the object to export as data. By default export the whole edge data untouched.
   * @param {Filter} [parameters.filter="visible"] Indicates what elements to export.
   * @param {"all"|"none"|"original"} [parameters.styles="all"] Indicates what styles (color, shape, size, text) should be exported: `'all'` for what is visually displayed, `'none'` for no style and `'original'` for the values provided at initialization.
   * @param {boolean} [parameters.download=true] If true, the user will be prompted a modal window so he can download the exported graph.
   * @param {string} [parameters.filename="graph.gexf"] If `download` is true, the default name for the downloaded file.
   * @return {Promise<string>}
   *
   * @example
   * ogma.export.gexf({
   *   creator: 'ogma'
   * }).then(function() {
   *   console.log('graph was saved in graph.gexf');
   * });
   */
  gexf: (options: GexfExportOptions) => Promise<string>;
  /**
   * @method Ogma.export.graphml
   * @param {object} [parameters]
   * @param {string} [parameters.graphId="G"] Id of the graph to write in the output file
   * @param {boolean} [parameters.directedEdges=true] Indicates in the output file if the edges are directed or not
   * @param {NodeCollection} [parameters.nodes] Nodes to export. By default export all the nodes.
   * @param {EdgeCollection} [parameters.edges] Edges to export. By default export all the edges.
   * @param {function (data: any): any} [parameters.nodeData] Given a node data in input, must return the object to export as data. By default export the whole node data untouched.
   * @param {function (data: any): any} [parameters.edgeData] Given an edge data in input, must return the object to export as data. By default export the whole edge data untouched.
   * @param {Filter} [parameters.filter="visible"] Indicates what elements to export.
   * @param {"all"|"none"|"original"} [parameters.styles="all"] Indicates what styles (color, shape, size, text) should be exported: `'all'` for what is visually displayed, `'none'` for no style and `'original'` for the values provided at initialization.
   * @param {boolean} [parameters.download=true] If true, the user will be prompted a modal window so he can download the exported graph.
   * @param {string} [parameters.filename="graph.graphml"] If `download` is true, the default name for the downloaded file.
   * @return {Promise<string>}
   *
   * @example
   * var filename = 'my-graph.graphml';
   * ogma.export.graphml({
   *   filename: filename
   * }).then(function() {
   *   console.log('graph was saved in', filename);
   * });
   */
  graphml: (parameters?: GraphMLExportOptions) => Promise<string>;
  /**
   * @method Ogma.export.json
   * @param {object} [parameters]
   * @param {Array<PropertyPath>|"all"}[parameters.nodeAttributes=['x', 'y', 'color', 'radius', 'shape', 'text']] List of node attributes to export. By default, export position, color, shape, text and radius.
   * @param {Array<PropertyPath>|"all"} [parameters.edgeAttributes=['color', 'width', 'text']] List of edge attributes to export. By default, export color, text and width.
   * @param {function (data: any): any} [parameters.nodeData] Given a node data in input, must return the object to export as data. By default export the whole node data untouched.
   * @param {function (data: any): any} [parameters.edgeData] Given an edge data in input, must return the object to export as data. By default export the whole edge data untouched.
   * @param {Filter|{nodes: NodeCollection, edges: EdgeCollection}} [parameters.filter="visible"] Indicates what elements to export.
   * @param {boolean} [parameters.pretty=false] Indicates if the output should be properly indented.
   * @param {boolean} [parameters.download=true] If true, the user will be prompted a modal window so he can download the exported graph.
   * @param {string} [parameters.filename="graph.json"] If `download` is true, the default name for the downloaded file.
   * @param {boolean} [parameters.anonymize=false]  If true, the exported graph will be anonimized (i.e. all the nodes
   * and edges will be exported <u>without data</u>). All the node and edge attributes will be exported as well.
   * Equivalent to <code>
   * ogma.export.json({
   *   nodeAttributes: 'all',
   *   edgeAttributes: 'all',
   *   filter: 'all',
   *   nodeData: () => null,
   *   edgeData => null
   * });
   * </code>.
   * @return {Promise<RawGraph>}
   *
   * @example
   * // post graph to the HTTP API
   * ogma.export.json().then(function(json) {
   *   var xhr = new XMLHttpRequest();
   *   xhr.open("POST", '/your/storage/api/', true);
   *   xhr.setRequestHeader("Content-type", "application/json");
   *   xhr.onreadystatechange = function() {
   *     if (xhr.readyState === 4 && xhr.status === 200) {
   *       console.log('sent');
   *     }
   *   };
   *   xhr.send(graph);
   * });
   */
  json: (options?: JSONExportOptions) => Promise<RawGraph<ND, ED>>;
  /**
   * @method Ogma.export.svg
   * @param {object}  [parameters]
   * @param {number}  [parameters.width]            If not specified, the width of the canvas will be used.
   * @param {number}  [parameters.height]           If not specified, the height of the canvas will be used.
   * @param {boolean} [parameters.clip=false]       Whether to clip the exported image to the current Ogma viewport.
   * @param {number}  [parameters.margin=10]        Additional margin.
   * @param {Color}   [parameters.background]       Color of the background
   * @param {boolean} [parameters.texts=true]       whether or not to export texts
   * @property {boolean} [preventOverlap=true]     If true, hide texts which overlap, else display labels which are already present on screen
   * @param {boolean} [parameters.images=true]      Indicates if images should be exported.
   * @param {boolean} [parameters.badges=true]      Whether or not to export badges
   * @param {boolean} [parameters.groupSemantically=true] Whether or not group the elements by type (nodes and edges).
   * If true expect the z-index of the texts to be different than in the visualization.
   * @param {boolean} [parameters.embedFonts=false] Whether or not to embed custom fonts as base64
   *                                                (works in viewers and browsers, but in order to edit
   *                                                you will have to install the fonts on your machine anyway).
   *                                                Otherwise the custom fonts will be just linked in the file.
   * @param {boolean} [parameters.download=true]    If true, the user will be prompted a modal window so he can
   *                                                download the exported graph.
   * @param {string} [parameters.filename="graph.svg"] If `download` is true, the default name for the downloaded file.
   * @param {string} [parameters.prefix='ogma']     Prefix for the entity class names. For example, elements belonging
   *                                                to a node are grouped into an SVG group with the class `ogma-node`
   *                                                and an attribute `data-node-id` with the (escaped) node id. The word
   *                                                `ogma` in these class names can be replaced by a custom string.
   * @return {Promise<string>} The argument is the SVG string
   *
   * @example
   * ogma.export.svg({
   *   download: false,
   *   width:    500,
   *   height:   500
   * }).then(function(svg) {
   *   document.getElementById('container').innerHTML = svg;
   * });
   */
  svg: (options?: SVGExportOptions) => Promise<string>;
  /**
   * @method Ogma.export.png
   * @param {ImageExportOptions} [options]
   * @return {Promise<string>} The argument of the Promise  is the data url of the output image
   *
   * @example
   * ogma.export.png({ download: false }).then(function(base64) {
   *   var img = new Image();
   *   img.src = base64;
   *   document.body.appendChild(img);
   * });
   *
   * @example
   * // Node.js - store the image on the disk
   * // make sure that 'canvas' package is available before you create an Ogma instance
   * var fs = require('fs');
   * ogma.exports.png({ download: false })
   *   .then(function(base64Str) {
   *     var base64 = base64Str.replace(/^data:image\/png;base64,/, '');
   *     fs.writeFileSync('graph.png', base64, 'base64');
   *   });
   */
  png: (options?: ImageExportOptions) => Promise<string>;
  /**
   * @method Ogma.export.jpg
   * @param {ImageExportOptions} [options]
   * @return {Promise<string>} The argument of the Promise  is the data url of the output image
   *
   * @example
   * ogma.exports.jpg({
   *   download: false,
   *   clip: true // would export the viewport as is
   * }).then(function(base64) {
   *   var img = new Image();
   *   img.src = base64;
   *   document.body.appendChild(img);
   * });
   */
  jpg: (options?: ImageExportOptions) => Promise<string>;
  /**
   * @method Ogma.export.tiff
   * @param {ImageExportOptions} [options]
   * @return {Promise<string>} The argument of the Promise is the data url of the output image
   *
   * @example
   * var filename = 'graph-1.tiff';
   * ogma.exports.tiff({ filename: filename }).then(function() {
   *   console.log('graph was exported as', filename);
   * });
   */
  tiff: (options?: ImageExportOptions) => Promise<string>;
  /**
   * @method Ogma.export.gif
   * @param {ImageExportOptions} [options]
   * @return {Promise<string>} The argument of the Promise  is the data url of the output image
   *
   * @example
   * // will export graph as a gif with text watermark over it
   * // and put it at the bottom of the page
   * ogma.exports.gif({
   *   download: false,
   *   textWatermark: {
   *     content: 'classified'
   *   }
   * }).then(function(base64) {
   *   var img = new Image();
   *   img.src = base64;
   *   document.body.appendChild(img);
   * });
   */
  gif: (options?: ImageExportOptions) => Promise<string>;
}

interface RandomGeneratorOptions {
  nodes?: number;
  edges?: number;
  texts?: boolean;
  scale?: number;
}

interface GridGeneratorOptions {
  rows?: number;
  columns?: number;
  columnDistance?: number;
  rowDistance?: number;
  xmin?: number;
  ymin?: number;
}

interface PathGeneratorOptions {
  length?: number;
  scale?: number;
}

interface BalancedTreeGeneratorOptions {
  children?: number;
  height?: number;
}

interface ErdosRenyiGeneratorOptions {
  nodes?: number;
  p?: number;
  edges?: number;
  scale?: number;
}

interface BarabasiAlbertGeneratorOptions {
  nodes?: number;
  m0?: number;
  m?: number;
  scale?: number;
}

interface RandomTreeGeneratorOptions {
  nodes?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface FlowerGeneratorOptions {
  depth?: number;
  breadth?: number;
  nbNodes?: number;
}

declare class GeneratorsAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.generate.balancedTree
   * Generates a simple balanced tree.
   * Source: https://github.com/gka/randomgraph.js (license: public domain)
   * @param {object} [options]
   * @param {number} [options.children=2] The number of children each node has.
   * @param {number} [options.height=3] The height of the tree.
   * @return {Promise<RawGraph>}
   *
   * @example
   * ogma.generate.balancedTree({
   *   children: 2,
   *   height: 3
   * }).then(function(rawGraph) {
   *   ogma.setGraph(rawGraph);
   *   console.log(ogma.getNodes().size);  // 15
   *   console.log(ogma.getEdges().size);  // 14
   * });
   */
  balancedTree: (options: BalancedTreeGeneratorOptions) => Promise<RawGraph>;
  /**
   * @method Ogma.generate.barabasiAlbert
   * Generates a scale-free graph using preferntial-attachment mechanism.
   * See <a href="https://en.wikipedia.org/wiki/Barab%C3%A1si%E2%80%93Albert_model">Barabási–Albert model (Wikipedia)</a>
   *
   * @param {object} [options]
   * @param {number} [options.nodes=40]   Number of nodes in the graph.
   * @param {number} [options.m0=5]       m0 > 0 && m0 <  nodes
   * @param {number} [options.m=1]        m  > 0 && m <= m0
   * @param {number} [options.scale=100]  scale > 0 Scale of the space used by graph.
   * @return {Promise<RawGraph>}
   *
   * @example
   * ogma.generate.barabasiAlbert({
   *   nodes: 2,
   *   scale: 3
   * }).then(function(rawGraph) {
   *   ogma.setGraph(rawGraph);
   *   console.log(ogma.getNodes().size);  // 15
   *   console.log(ogma.getEdges().size);  // 14
   * });
   */
  barabasiAlbert: (
    options: BarabasiAlbertGeneratorOptions
  ) => Promise<RawGraph>;
  /**
   * @method Ogma.generate.erdosRenyi
   * Generates an Erdős–Rényi graph. Call it with options (n,p) or (n,m).
   * Source: https://github.com/gka/randomgraph.js (license: public domain)
   * See <a href="https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model">Erdős–Rényi model (Wikipedia)</a>
   *
   * @param {object} [options]
   * @param {number} [options.nodes=20] The number of nodes.
   * @param {number} [options.p=0.1] The probability [0..1] of a edge between any two nodes. If specified, `edges` must not be specified.
   * @param {number} [options.edges] The number of edges. If specified, `p` must not be specified.
   * @return {Promise<RawGraph>}
   *
   * @example
   * ogma.generate.erdosRenyi({
   *   nodes: 15,
   *   p:       0.5
   * }).then(function(rawGraph) {
   *   console.log(rawGraph.nodes.length); // 15
   *   console.log(rawGraph.edges.length); // ~50-60
   *   ogma.setGraph(rawGraph);
   *   ogma.view.locateGraph();
   * });
   */
  erdosRenyi: (options: ErdosRenyiGeneratorOptions) => Promise<RawGraph>;
  /**
   * Generates a tree, with each node positioned at the center of its children,
   * @param {object} options
   * @param {number} [options.depth=3]    Depth of the tree
   * @param {number} [options.breadth=3]  Number of children for each node
   * @param {number} [options.nbNodes]    If specified, the breadth is set to 5 and the depth is computed in
   * order to have the right amount of nodes.
   * @return {RawGraph}
   */
  flower: (options: FlowerGeneratorOptions) => Promise<RawGraph>;
  /**
   * @method Ogma.generate.grid
   * Generates a grid.
   * @param {object} [options]
   * @param {number} [options.rows=4] The number of rows in the graph.
   * @param {number} [options.columns=4] The number of columns in the graph.
   * @param {number} [options.columnDistance=20] Distance between two columns of nodes
   * @param {number} [options.rowDistance=20] Distance between two rows of nodes
   * @param {number} [options.xmin=0] Start X coordinate for the grid
   * @param {number} [options.ymin=0] Start Y coordinate for the grid.
   * @return {Promise<RawGraph>}
   *
   * @example
   * ogma.generate.grid({
   *   rows:    3
   *   columns: 5
   * }).then(function(rawGraph) {
   *   console.log(rawGraph.nodes.length); // 15
   *   console.log(rawGraph.edges.length); // 22
   *   ogma.setGraph(rawGraph);
   *   ogma.view.locateGraph();
   * });
   */
  grid: (options: GridGeneratorOptions) => Promise<RawGraph>;
  /**
   * @method Ogma.generate.path
   * Generates a path.
   * @param {object} [options]
   * @param {number} [options.length=5] Number of nodes.
   * @return {Promise<RawGraph>}
   *
   * @example
   * ogma.generate.path({ length: 5 }).then(function(rawGraph) {
   *   console.log(rawGraph.nodes.length, 'nodes, connected by', rawgraph.edges.length, 'edges');
   *   // 5 nodes, connected by 4 edges
   * });
   */
  path: (options: PathGeneratorOptions) => Promise<RawGraph>;
  /**
   * @method Ogma.generate.random
   * Generates a random graph.
   * @param {object} [options]
   * @param {number} [options.nodes=10] Number of nodes.
   * @param {number} [options.edges=10] Number of edges.
   * @return {Promise<RawGraph>}
   *
   * @example
   * ogma.generate.random().then(function(rawGraph) {
   *   ogma.setGraph(rawGraph);
   *   // center on graph with 300ms transition
   *   ogma.view.locateGraph({ duration: 300 });
   * });
   */
  random: (options: RandomGeneratorOptions) => Promise<RawGraph>;
  /**
   * @method Ogma.generate.randomTree
   * Generates a random tree graph.
   * @param {object} [options]
   * @param {number} [options.nodes=50]   Number of nodes.
   * @param {number} [options.x=0]        X of the center
   * @param {number} [options.y=0]        Y of the center
   * @param {number} [options.width=100]  Width of the space to generate graph in
   * @param {number} [options.height=100] Height of the space to generate graph in
   * @return {Promise<RawGraph>}
   *
   * @example
   * ogma.generate.tree({ nodes: 200 }).then(function(rawGraph) {
   *   ogma.setGraph(rawGraph);
   *   // center on graph with 300ms transition
   *   ogma.view.locateGraph({ duration: 300 });
   * });
   */
  randomTree: (options: RandomTreeGeneratorOptions) => Promise<RawGraph>;
}

/**
 * @extends Options
 * @property {object}       [cursor]
 * @property {CursorStyle}  [cursor.default="default"] A CSS value for the cursor.
 * @property {Color}        [backgroundColor="white"] Background color of the canvas.
 * @property {RendererType} [renderer="webgl"]      Rendering type. If WebGL is selected and not available, Ogma will fallback on Canvas.
 * If no renderer is available (e.g in Node.js), Ogma will fallback on headless mode (`null`).
 * @property {CrossOriginValue} [imgCrossOrigin="anonymous"] Indicates the value of the `crossOrigin` field for DOM images.
 */
/**
 * @extends OgmaParameters
 * @property {"webgl"|"canvas"|"svg"|null} [renderer="webgl"] Rendering type. If WebGL is selected and not available, Ogma
 * fallback on Canvas. If no renderer is available (e.g in Node.js), Ogma will fallback on headless mode (`null`).
 * This field is an alias for `ogma.setOptions({renderer: value})`
 * @property {CrossOriginValue} [imgCrossOrigin="anonymous"] Indicates the value of the `crossOrigin` field for DOM images.
 * This is an alias for `ogma.setOptions({imgCrossOrigin: value})`
 */
/**
 * @public
 * with the addition that each property can be replaced by a function that return a value for this property (or an object
 * if the property has multiple nested sub-properties). `undefined` can be explicitly specified in any field to indicate that
 * the attribute should not be modified (useful when updating a class/rule).
 * When working with a large number of nodes/edges, avoid as much as possible the usage of functions.
 * @example
 * ogma.styles.addRule({
 *   nodeAttributes: {
 *     text: {
 *       // Specifying the same values for the attribute for all nodes
 *       font: 'Times'
 *     },
 *     // Function for "leaf" property
 *     color: function(node) {
 *       if (node.getData('type') === 'company') {
 *         return 'red';
 *       } else {
 *         return 'blue';
 *       }
 *     },
 *     innerStroke: function(node) {
 *       // Function for property with nested properties
 *       if (node.getData('country') === 'Germany') {
 *         return { width: 2, color: 'green' };
 *       } else {
 *         return { width: 1, color: 'white' };
 *       }
 *     },
 *     badges: {
 *       topRight: function(node) {
 *         return node.getDegree();
 *       }
 *     }
 *   }
 * });
 * @example
 * ogma.styles.addRule({
 *   // It's also possible to provide a function that will return the whole attributes object
 *   nodeAttributes: function(node) {
 *     if (node.getData('foo') === 'bar') {
 *       return { color: 'blue', radius: 4 };
 *     } else {
 *       return { color: 'red', radius: 2 };
 *     }
 *   }
 * });
 * [`EdgeAttributes`](#EdgeAttributes), with the addition that each property can
 * be replaced by a function that return a value for this property (or an object
 * if the property has multiple nested sub-properties).
 * When working with a large number of nodes/edges, avoid as much as possible the usage of functions.
 *
 * Indicates a renderer state. <br>
 * <code>"requested"</code> is fired right after Ogma is initialized or the `renderer` option has been changed, and means that the
 * renderer has not been initialized yet. <br>
 * <code>"ok"</code> indicates that the renderer has been initialized and runs properly. <br>
 * <code>"error"</code> indicates that an error has occurred that prevents the renderer from running.
 * A non-null value indicates that an error has occurred and provides information on that error. <br>
 * <code>"NO_WEBGL"</code> indicates that WebGL is not available, most likely a browser or GPU issue. <br>
 * <code>"NO_ANGLE_INSTANCED_ARRAYS</code>" indicates that the
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays">ANGLE_instanced_arrays</a>
 * WebGL extension is not available. Also most likely a browser or GPU issue. <br>
 * <code>"OTHER"</code> indicates an unexpected error, most likely due to a specific combination of browser/GPU/OS that was not
 * handled correctly by Ogma. If you happen to encounter this error code , please contact support@linkurio.us and
 * provide the error message along with the browser, operating system and graphics card used.
 */
declare class GraphicsAPI<ND, ED> {
  /**
   * @method Ogma.reloadFonts
   * Indicates that the DOM has finished loading fonts. If you use an external font (like FontAwesome) and the font
   * is not displayed correctly on your nodes and edges (e.g squares instead of the actual characters), call this
   * method once you know the font has been loaded.
   * @example
   * ogma.reloadFonts();
   */
  reloadFonts(): void;
}

declare class ImportsAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.parse.gexf
   * Parse a GEXF string and return the raw graph.
   * @param {string} content
   * @return {Promise<RawGraph>}
   *
   * @example
   * fetch(url)
   *   .then((response) => response.text())
   *   .then((gexfString) => ogma.parse.gexf(gexfString))
   *   .then((graph) => ogma.setGraph(graph));
   */
  gexf: (content: string) => Promise<RawGraph>;
  /**
   * @method Ogma.parse.gexfFromUrl
   * Fetch and parse a GEXF file and return the raw graph.
   * @param {string} url
   * @return {Promise<RawGraph>}
   *
   * @example
   * // same as the example above, but shorter
   * ogma.parse.gexfFromUrl(url).then(function(graph) {
   *   ogma.setGraph(graph);
   * });
   */
  gexfFromUrl: (url: string) => Promise<RawGraph>;
  /**
   * @method Ogma.parse.janus
   * Parse the result of a JanusGraph query into an Ogma graph.
   * @param {object} content Response of the gremlin-client library ("gremlin-client")
   * @return {Promise<RawGraph>}
   *
   * @example
   * // Use the gremlin-client library to create a session
   * var client = Gremlin.createClient(8182, 'localhost', {});
   *
   * // Use the client to send a query
   * var q = 'g.V().limit(10).store("v").bothE().store("e").cap("v, "e")';
   * client.runQuery(, {}, function(error, res) => {
   *   if (error) {
   *     console.log('Gremlin query error: ' + error.message);
   *   }
   *
   *   var rawGraph = ogma.parse.janus(res);
   *   return ogma.setGraph(rawGraph);
   * });
   */
  janus: (content: string) => Promise<RawGraph>;
  /**
   * @method Ogma.parse.json
   * Parse a JSON string and return the raw graph.
   * @param {string} content
   * @param {function(json: Object | unknown[]): RawGraph} [transform] Function
   * to transform custom JSON format into Ogma's `RawGraph`
   * @return {Promise<RawGraph>}
   *
   * @example
   * ogma.exports.json({download: false)})
   *   .then((jsonString) => ogma.parse.json(jsonString))
   *   .then((graph) => ogma.setGraph(graph))
   *   .then(() => ogma.view.locateGraph());
   */
  json: <NodeData = ND, EdgeData = ED>(
    content: string,
    transform?:
      | ((
          json: Record<string, any> | unknown[]
        ) => RawGraph<NodeData, EdgeData>)
      | undefined
  ) => Promise<RawGraph<NodeData, EdgeData>>;
  /**
   * @method Ogma.parse.jsonFromUrl
   * Fetch and parse a JSON file and return the raw graph.
   * @param {string} url
   * @param {function(json: Object | unknown[]): RawGraph} [transform] Function
   * to transform custom JSON format into Ogma's `RawGraph`
   * @return {Promise<RawGraph>}
   *
   * @example
   * // here, the input graph has a different format to represent edges:
   * // { links: [{ from: NodeId, to: NodeId}], nodes: [{ id: NodeId }] };
   * function transform (json) {
   *   const edges = json.links;
   *   return {
   *     nodes: json.nodes,
   *     edges: edges.map(function (edge) {
   *       edge.source = edge.from;
   *       edge.target = edge.to;
   *       return edge;
   *     })
   *   };
   * }
   *
   * // passing the custom transformation function
   * ogma.parse.jsonFromUrl(url, transform).then(function(graph) {
   *   ogma.setGraph(graph);
   * });
   */
  jsonFromUrl: <NodeData = ND, EdgeData = ED>(
    url: string,
    transform?:
      | ((
          json: Record<string, any> | unknown[]
        ) => RawGraph<NodeData, EdgeData>)
      | undefined
  ) => Promise<RawGraph<NodeData, EdgeData>>;
  /**
   * @method Ogma.parse.neo4j
   * Parse the result of a Neo4J query into an Ogma graph.
   *
   * The parsed user's data will be stored into each Ogma item "data" field with the following structure:
   *
   * ● `neo4jProperties` data field for each item in Ogma,
   *
   * ● `neo4jLabels` field for Neo4j node labels information,
   *
   * ● `neo4jType` field for Neo4j edge types;
   * @param {object} content Response of the Neo4j Bolt driver ("neo4j-javascript-driver")
   * @return {Promise<RawGraph>}
   *
   * @example
   * // Use the neo4j-javascript-driver to create a session
   * // Refer to the neo4j-javascript-driver documentation for more information
   * const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('username', 'password'));
   * const session = driver.session();
   *
   * // Use the session to send a query
   * session
   *   .run('MATCH (n) OPTIONAL MATCH (n)-[r]-() RETURN n,r LIMIT 100')
   *   // Parse the response into an Ogma graph
   *   .then((response) => ogma.parse.neo4j(response))
   *   // Load this graph
   *   .then((graph) => ogma.setGraph(graph))
   *   .then(() => {
   *     console.log('Import done!');
   *     session.close();
   *   });
   */
  neo4j: <
    ND_1 extends Neo4JNodeData<Record<string, unknown>>,
    ED_1 extends Neo4JEdgeData<Record<string, unknown>>
  >(
    content: object | string
  ) => Promise<RawGraph<ND_1, ED_1>>;
}

/**
 * @public
 * Generic layout options.
 * @param {NodeId[]|NodeList} [nodes]  List of affected nodes. If nothing provided, the whole graph will be used. Where edges param is available and provided, then this list will be augmented with reached nodes from the passed edge list.
 * @param {number}           [duration]     Duration of the animation when the graph is updated
 * @param {boolean}          [skipTextDrawing=true] Skip drawing labels during the layout. Improves performance and user experience.
 * @param {function(): void} [onSync]       Function called every time the graph is updated
 * @param {function(): void} [onEnd]        Function called after the last graph update
 * @param {boolean}          [useWebWorker=true] Indicates if the layout should be computed inside a web worker.
 * @param {boolean}          [continuous=false] Whether or not the layout should render intermediate steps.
 * @param {boolean|LocateOptions} [locate=false]    Center on the graph bounding box when the layout is complete. You can also provide padding.
 */
interface LayoutOptions {
  nodes?: NodeId[] | NodeList;
  edges?: EdgeId[] | EdgeList;
  duration?: number;
  skipTextDrawing?: boolean;
  onSync?: (...args: any[]) => void;
  onEnd?: (...args: any[]) => void;
  useWebWorker?: boolean;
  continuous?: boolean;
  locate?: boolean | LocateOptions;
  onUpdate?: (...args: any[]) => void;
  dryRun?: boolean;
}
interface IncrementalOptions {
  referenceNodes?: NodeId[] | NodeList;
  margin?: number;
}
interface IncrementalLayoutOptions {
  incremental?: boolean | IncrementalOptions;
  nodes?: NodeList | NodeId[];
  centralNode?: Node$1;
  margin?: number;
}

interface LayoutEvent {
  layoutName: string;
  positions: {
    current: Point[];
    before: Point[];
  };
  ids: NodeId[];
}

interface ConcentricLayoutOptions extends LayoutOptions {
  centralNode: NodeId | Node$1;
  centerX?: number;
  centerY?: number;
  sortBy?: PropertyPath;
  clockwise?: boolean;
  allowOverlap?: boolean;
  circleHopRatio?: number;
}
declare const _default$6: <ND, ED>(
  ogma: Ogma<ND, ED>
) => (params: ConcentricLayoutOptions) => Promise<LayoutEvent>;

interface RadialLayoutOptions<ND, ED> extends Omit$1<LayoutOptions, 'edges'> {
  centralNode: Node$1<ND, ED> | NodeId;
  centerX?: number;
  centerY?: number;
  allowOverlap?: boolean;
  repulsion?: number;
  radiusDelta?: number;
  radiusRatio?: number;
  nodeGap?: number;
  maxIterations?: number;
  iterationsPerRender?: number;
  renderSteps?: boolean;
  epsilon?: number;
  randomize?: boolean;
}
declare const _default$5: <ND, ED>(
  ogma: Ogma<ND, ED>
) => (params: RadialLayoutOptions<ND, ED>) => Promise<LayoutEvent>;

interface ForceLayoutOptions extends LayoutOptions, IncrementalLayoutOptions {
  charge?: number;
  gravity?: number;
  edgeStrength?: number;
  steps?: number;
  theta?: number;
  radiusRatio?: number;
  edgeLength?: number;
  cx?: number;
  cy?: number;
  elasticity?: number;
  alignSiblings?: boolean;
  siblingsOffset?: number;
  autoStop?: boolean;
}
declare const _default$4: <ND, ED>(
  ogma: Ogma<ND, ED>
) => (params?: ForceLayoutOptions) => Promise<LayoutEvent>;

interface ForceLinkOptions extends LayoutOptions, IncrementalLayoutOptions {
  scalingRatio?: number;
  gravity?: number;
  edgeWightInfluence?: number;
  linLogMode?: boolean;
  outboundAttractionDistribution?: boolean;
  strongGravityMode?: boolean;
  slowDown?: number;
  alignNodeSiblings?: boolean;
  nodeSiblingsScale?: number;
  nodeSiblingsAngleMin?: number;
  autoStop?: boolean;
  maxIterations?: number;
  avgDistanceThreshold?: number;
  startingIterations?: number;
  iterationsPerRender?: number;
  barnesHutOptimize?: boolean;
  barnesHutTheta?: number;
  randomize?: 'locally' | 'globally';
  randomizeFactor?: number;
  nodeMass?: (node: Node$1) => number;
  edgeWeight?: (edge: Edge) => number;
}
declare const _default$3: <ND, ED>(
  ogma: Ogma<ND, ED>
) => (params?: ForceLinkOptions) => Promise<LayoutEvent>;

interface HierarchicalLayoutOptions extends LayoutOptions {
  direction?: 'TB' | 'BT' | 'LR' | 'RL';
  nodeDistance?: number;
  levelDistance?: number;
  componentDistance?: number;
  gapWidth?: number;
  layer?: PropertyPath;
  arrangeComponents?: 'fit' | 'grid' | 'singleLine';
  gridDistance?: number;
  roots?: NodeId[] | NodeList;
  sinks?: NodeId[] | NodeList;
}
declare const _default$2: <ND, ED>(
  ogma: Ogma<ND, ED>
) => (params?: HierarchicalLayoutOptions) => Promise<LayoutEvent>;

declare type SequentialLayoutOptions = Omit$1<
  HierarchicalLayoutOptions,
  'gapWidth'
> & {};
declare const _default$1: <ND, ED>(
  ogma: Ogma<ND, ED>
) => (params?: SequentialLayoutOptions) => Promise<LayoutEvent>;

interface GridLayoutOptions extends Omit$1<LayoutOptions, 'edges'> {
  rows?: number;
  cols?: number;
  sortBy?: PropertyPath;
  sortFallbackValue?: any;
  reverse?: boolean;
}
declare const _default: <ND, ED>(
  ogma: Ogma<ND, ED>
) => (params?: GridLayoutOptions) => Promise<LayoutEvent>;

declare class LayoutsAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.layouts.concentric
   * Concentric layout. This layout takes a base node as parameter and organizes the graph so the nodes close to the
   * selected node are close to it spatially.
   * @param {object} params See <a href="#LayoutOptions" class="typeref">LayoutOptions</a> for common layout options.
   *
   * @param {NodeId[]|NodeList} [params.nodes]  List of affected nodes. If nothing provided, the whole graph will be used. If edges are provided too, then this list will be augmented with reached nodes from the passed edge list.
   * @param {EdgeId[]|EdgeList} [params.edges]  List of affected edges. If nothing provided, the adjacent edges to the node list is used.
   * @param {number}           [params.duration]     Duration of the animation when the graph is updated
   * @param {boolean}          [params.skipTextDrawing=true] Skip drawing labels during the layout. Improves performance and user experience.
   * @param {function(): void} [params.onSync]       Function called every time the graph is updated
   * @param {function(): void} [params.onEnd]        Function called after the last graph update
   * @param {boolean}          [params.useWebWorker=true] Indicates if the layout should be computed inside a web worker.
   * @param {boolean|LocateOptions} [params.locate=false]    Center on the graph bounding box when the layout is complete. You can also provide padding.
   *
   * @param {NodeId|Node} params.centralNode         Id of the central node
   * @param {number}  [params.centerX]               X coordinate where the central node must be moved, if different from the central node X
   * @param {number}  [params.centerY]               Y coordinate where the central node must be moved, if different from the central node Y
   * @param {string}  [params.sortBy]                Indicates the property from which the nodes must be sorted, or
   *                                                 `'random'`. You can use `'radius'`, `'degree'` or custom data
   *                                                 attributes.
   * @param {boolean} [params.clockwise=true]        Specifies if the nodes must be ordered clockwise.
   * @param {boolean} [params.allowOverlap=false]    Specifies if nodes are allowed to overlap.
   * @param {number}  [params.circleHopRatio=5]      If `allowOverlap` is false, specified the space between each ring, relative to the highest node size.
   *
   * @return {Promise<void>}
   *
   * @example
   * ogma.layouts.concentric({ centralNode: 'n0', sortBy: 'degree' });
   */
  concentric: ReturnType<typeof _default$6>;
  /**
   * @method Ogma.layouts.radial
   * Radial (concentric) layout positions nodes around the selected one based on
   * their graph-theoretical distance (shortest path in the graph, connecting them).
   * If there are subgraphs or nodes not reachable from the central node,
   * they will be pushed outwards, but still placed around the layout
   * in a readable way.
   *
   * @param {object} params See <a href="#LayoutOptions" class="typeref">LayoutOptions</a> for common layout options.
   *
   * @param {Array<NodeId>|NodeList} [params.nodes]  List of affected nodes. If nothing provided, the whole graph will be used.
   * @param {number}           [params.duration]     Duration of the animation when the graph is updated
   * @param {boolean}          [params.skipTextDrawing=true] Skip drawing labels during the layout. Improves performance and user experience.
   * @param {function(): void} [params.onSync]       Function called every time the graph is updated
   * @param {function(): void} [params.onEnd]        Function called after the last graph update
   * @param {boolean}          [params.useWebWorker=true] Indicates if the layout should be computed inside a web worker.
   * @param {boolean|LocateOptions} [params.locate=false]    Center on the graph bounding box when the layout is complete. You can also provide padding.
   *
   * @param {Node|NodeId} params.centralNode           Id of the central node
   * @param {number} [params.centerX]             X coordinate where the central node must be moved,
   *                                              if different from the central node X
   * @param {number} [params.centerY]             Y coordinate where the central node must be moved,
   *                                              if different from the central node Y
   * @param {boolean} [params.allowOverlap=false] Specifies if nodes are allowed to overlap.
   * @param {number} [params.repulsion=1]         Increase or decrease the repulsion force between the nodes on
   *                                              the same levels. Values smaller than 1 will result in more compact
   *                                               placement along the layers.
   * @param {number} [params.radiusDelta=0]       You can specify a constant distance
   *                                              between the layout layers, in this case
   *                                              `radiusRatio` will be ignored
   * @param {number} [params.radiusRatio=Math.SQRT2] Ratio between the radii
   *                                              of adjacent concentric layers:
   *                                              R[n+1] = R[n] × ratio
   * @param {number} [params.nodeGap=10]          Additional gap between the nodes
   *                                              that belong to one layer
   * @param {number} [params.maxIterations=100]   Maximum number of layout sweeps
   * @param {number} [params.iterationsPerRender=20] Layout iterations per update.
   * @param {boolean} [params.renderSteps=false]  Render intermediate results, before the
   *                                              algorithm converges. That means sending the
   *                                              calculated positions every `iterationsPerRender`
   *                                              iterations.
   * @param {number} [params.epsilon=0.001]       Layout precision. Smaller number means
   *                                              better precision but longer computation time
   *
   * @return {Promise<void>}
   *
   * @example
   * ogma.layouts.radial({ centralNode: 'n0', radiusDelta: 200 });
   */
  radial: ReturnType<typeof _default$5>;
  /**
   * @method Ogma.layouts.force
   *
   * Force-directed layout.
   * @param {object} params See <a href="#LayoutOptions" class="typeref">LayoutOptions</a> for common layout options.
   *
   * @param {NodeId[]|NodeList} [params.nodes]  List of affected nodes. If nothing provided, the whole graph will be used. If edges are provided too, then this list will be augmented with reached nodes from the passed edge list.
   * @param {EdgeId[]|EdgeList} [params.edges]  List of affected edges. If nothing provided, the adjacent edges to the node list is used.
   * @param {number}           [params.duration]     Duration of the animation when the graph is updated
   * @param {boolean}          [params.skipTextDrawing=true] Skip drawing labels during the layout.
   * @param {function(): void} [params.onSync]       Function called every time the graph is updated
   * @param {function(): void} [params.onEnd]        Function called after the last graph update
   * @param {boolean}          [params.useWebWorker=true] Indicates if the layout should be computed inside a web worker
   * @param {boolean|LocateOptions} [params.locate=false] Center on the graph bounding box when the layout is
   *                                                      complete. You can also provide padding.
   * @param {boolean | object}  [params.incremental=false] Enable the incremental layout using Force layout. When true is uses the default options.
   * @param {number}  [params.incremental.margin = 5]      Will apply Force layout to the group and place the resulting configuration in the closest available position, maintaining a `margin`.
   * @param {NodeId[]|NodeList} [params.incremental.referenceNodes]
   * @param {number}  [params.charge=10]          Distance factor between nodes. A greater value increases the distance.
   * @param {number}  [params.gravity=0.015]      Force that attracts nodes to the center of the graph. Center is either
   *                                             the mass center of the graph or the value defined by `cx` and `cy`.
   *                                             Greater value makes the layout more compact.
   * @param {number}  [params.edgeStrength=0.75]  Attraction strength. Higher values make edges' attractive force stronger.
   * @param {number}  [params.steps=300]         Iteration steps limit and cooling ratio.
   * @param {number}  [params.theta=0.62]        Theta parameter of the Barnes-Hut optimization. Plays the role of
   *                                             the precision in repulsive forces approximation.
   * @param {number}  [params.radiusRatio=1.25]  Radius ratio is used to allow for small gaps between the nodes while
   *                                             avoiding the ovelapping.
   * @param {number}  [params.edgeLength=30]     Desired length of an edge connecting 2 nodes.
   * @param {number}  [params.cx]                X coordinate of the layout mass center.
   * @param {number}  [params.cy]                Y coordinate of the layout mass center.
   * @param {number}  [params.elasticity=0.9]    Node collision elasticity. Smaller values may result in incomplete node
   *                                             overlap removal. Passing `0` will skip that algorithm pass altogether.
   * @param {boolean} [params.alignSiblings=false] Align nodes that are linked to the same two nodes only. It enhances
   *                                               readability. This operation is performed once the main layout is
   *                                               finished.
   * @param {number} [params.siblingsOffset=0.0] Additional offset between the node siblings, so that the distance
   *                                             to the next node in the row would be r * (1 + siblingsOffset), where r
   *                                             is the previous node's radius.
   * @param {autoStop} [params.autoStop=false] Stop layout earlier if the algorithm decides that it has converged to
   *                                           a stable configuration. It can make the algorithm run much faster and
   *                                           would require fewer iterations if you are restarting the layout after
   *                                           it has already converged.
   *
   * @return {Promise<void>}
   *
   * @example
   *
   * ogma.layouts.force()
   *   .then(() => {
   *     console.log('layout complete');
   *   });
   */
  force: ReturnType<typeof _default$4>;
  /**
   * @method Ogma.layouts.forceLink
   *
   * Force link layout.
   * @param {object} params See <a href="#LayoutOptions" class="typeref">LayoutOptions</a> for common layout options.
   *
   * @param {NodeId[]|NodeList} [params.nodes]  List of affected nodes. If nothing provided, the whole graph will be used. If edges are provided too, then this list will be augmented with reached nodes from the passed edge list.
   * @param {EdgeId[]|EdgeList} [params.edges]  List of affected edges. If nothing provided, the adjacent edges to the node list is used.
   * @param {number}           [params.duration]     Duration of the animation when the graph is updated
   * @param {boolean}          [params.skipTextDrawing=true] Skip drawing labels during the layout. Improves performance and user experience.
   * @param {function(): void} [params.onSync]       Function called every time the graph is updated
   * @param {function(): void} [params.onEnd]        Function called after the last graph update
   * @param {boolean}          [params.useWebWorker=true] Indicates if the layout should be computed inside a web worker.
   * @param {boolean|LocateOptions} [params.locate=false]    Center on the graph bounding box when the layout is complete. You can also provide padding.
   * @param {boolean | object}  [params.incremental=false] Enable the incremental layout using Force layout. When true is uses the default options.
   * @param {number}  [params.incremental.margin = 5]      Will apply Force layout to the group and place the resulting configuration in the closest available position, maintaining a `margin`.
   * @param {NodeId[]|NodeList} [params.incremental.referenceNodes]
   * @param {number}  [params.scalingRatio=100]         Distance factor between nodes. A greater value increases the distance.
   * @param {number}  [params.gravity=1]                Force which attracts nodes to the center of the graph. A greater value makes the graph more compact.
   * @param {number}  [params.edgeWeightInfluence=0]           Increase attraction force between nodes connected with edges of positive weights. Disabled by default.
   * @param {boolean} [params.linLogMode=false]                Alternative energy model with linear repulsion force and logarithmic attraction force.
   * @param {boolean} [params.outboundAttractionDistribution=false] Attract super-nodes (with many edges) to the outside.
   * @param {boolean} [params.strongGravityMode=true]          Enable a gravity formula to have a strong effect.
   * @param {number}  [params.slowDown=1]                      Reduces the speed of node displacements as the number of iterations increases.
   * @param {boolean} [params.alignNodeSiblings=true]          Align nodes that are linked to the same two nodes only. It enhances readability. This operation is performed once the main layout is finished.
   * @param {number}  [params.nodeSiblingsScale=5]             Distance multiplier between the aligned nodes.
   * @param {number}  [params.nodeSiblingsAngleMin=0]          Force a minimal angle between aligned nodes (from 0 to PI / 2). Node labels may indeed overlap on horizontally aligned nodes.
   * @param {boolean} [params.autoStop=true]                   The layout stops automatically if true.
   * @param {number}  [params.maxIterations=1000]              Set a limit to the number of iterations if autoStop: true.
   * @param {number}  [params.avgDistanceThreshold=0.01]       This is the normal stopping condition of autoStop: true. When the average displacements of nodes is below this threshold, the layout stops.
   * @param {number}  [params.startingIterations=10]           Number of iterations to be run before the first update of the graph visualization.
   * @param {number}  [params.iterationsPerRender=10]          Number of iterations to be run before each update of the graph visualization.
   * @param {boolean} [params.barnesHutOptimize=false]         Should we use the algorithm's Barnes-Hut to improve repulsion's scalability (`O(n²)` to `O(nlog(n))`)? This is useful for large graphs (5000+ nodes) but harmful to small ones.
   * @param {number}  [params.barnesHutTheta=0.5]              Theta parameter of the Barnes-Hut optimization.
   * @param {string}  [randomize]                              Whether to randomize the node positions before running the layout. Possible values are `locally` and `globally`. `Locally` means that the node coordinate will be shuffled around its current position, whereas with `globally` it will be assigned a new random value.
   * @param {number}  [randomizeFactor=1]                      [1] Randomization scaling factor.
   * @param {function(node:Node, degree:number):number} [params.nodeMass] Use this getter to assign node masses. Node degree is passed in for convenience.
   * @param {function(edge:Edge):number} [params.edgeWeight]              Use this getter to modify edge weight. 0 means that the edge will be ignored
   *
   * @return {Promise<void>}
   *
   * @example
   *
   * ogma.layouts.forceLink({
   *   barnesHutOptimize: false,
   *   duration: 500
   * });
   */
  forceLink: ReturnType<typeof _default$3>;
  /**
   * @method Ogma.layouts.hierarchical
   *
   * The hierarchical layout positions nodes starting from a root nodes downwards
   * generating a visual hierarchy based on connectivity.<br>
   *
   * When the user provides the root nodes then the algorithm positions the cascading nodes
   * based on their graph-theoretical distance. When root nodes are not provided then the algorithm
   * works out the best top node in order to reduce the number of layers (depth) of the hierarchy.
   * It is possibile to impose constraints to the layout in order to set specific layers (depth) for each
   * node using a numeric `layer` data attribute.<br>
   * If you want to force a node to be at the top or the bottom of the layering, look at the `roots` and `sinks` parameters.<br>
   *
   * If there are subgraphs or nodes not reachable from the central node,
   * they will be layouted separately. It is possibile to control how these subgraphs are positioned.
   *
   * @example
   * ogma.layouts.hierarchical({
   *   direction: 'TB',  // Direction of the layout. Can be TB, BT, LR, or RL,
   *                   // where T = top, B = bottom, L = left, and R = right.
   *   duration: 300,  // Duration of the animation
   *   nodeDistance: 30,    // Number of pixels that separate nodes horizontally in the layout.
   *   levelDistance: 40     // Number of pixels between each layer in the layout.
   * }).then(function() {
   *   console.log('done');
   * });
   *
   * @param {object} params See <a href="#LayoutOptions" class="typeref">LayoutOptions</a> for common layout options.
   *
   * @param {NodeId[]|NodeList} [params.nodes]  List of affected nodes. If nothing provided, the whole graph will be used. If edges are provided too, then this list will be augmented with reached nodes from the passed edge list.
   * @param {EdgeId[]|EdgeList} [params.edges]  List of affected edges. If nothing provided, the adjacent edges to the node list is used.
   * @param {number}           [params.duration]     Duration of the animation when the graph is updated
   * @param {boolean}          [params.skipTextDrawing=true] Skip drawing labels during the layout. Improves performance and user experience.
   * @param {function(): void} [params.onSync]       Function called every time the graph is updated
   * @param {function(): void} [params.onEnd]        Function called after the last graph update
   * @param {boolean|LocateOptions} [params.locate=false]    Center on the graph bounding box when the layout is complete. You can also provide padding.
   *
   * @param {"TB"|"BT"|"LR"|"RL"}  [params.direction='TB'] Layout direction: Top-bottom/bottom-top/left-right/right-left.
   * @param {number}  [params.nodeDistance=50]  Desired distance between the nodes on one layer
   * @param {number}  [params.levelDistance=50] Desired distance between the layers of layout
   * @param {number}  [params.componentDistance=25] Desired distance between disconnected components
   * @param {number}  [params.gapWidth=1] Desidered width of gap spaces between nodes not sequentially next to each other (siblings). This is an advanced parameter, often not required to change, it is similar to the previous "edgeDistance" parameter in Dagre. Expressed in percentage (%) from 1 to 100.
   * @param {string} [params.layer] Data field defining the layer of the node in the hierarchy
   * @param {"fit"|"grid"|"singleLine"}  [params.arrangeComponents='fit'] Desired fit for multiple disconnected components: "fit" attempt to optimize the screen space; "grid" adds a special behaviour for isolated nodes, arranging them together in a grid, then fit on the screen; "singleLine" arrange all disconnected components alongside.
   * @param {number}  [params.gridDistance=50] Desidered distance between isolated nodes when arranged in grid. Used only when "grid" arrangeComponent is enabled.
   * @param {NodeId[]|NodeList} [params.roots=[]] List of nodes to put at the top of the hierarchy
   * @param {NodeId[]|NodeList} [params.sinks=[]] List of nodes to put at the bottom of the hierarchy
   *
   * @return {Promise<void>}
   *
   * @demo layout-hierarchical
   */
  hierarchical: ReturnType<typeof _default$2>;
  /**
   * @method Ogma.layouts.sequential
   *
   * The sequential layout positions nodes starting from a root nodes downwards
   * generating a visual hierarchy based on connectivity with a costant width.<br>
   *
   * When the user provides the root nodes then the algorithm positions the cascading nodes
   * based on their graph-theoretical distance. When root nodes are not provided then the algorithm
   * works out the best top node in order to reduce the number of layers (depth) of the hierarchy.
   * It is possibile to impose constraints to the layout in order to set specific layers (depth) for each
   * node using a numeric `layer` data attribute.<br>
   * If you want to force a node to be at the top or the bottom of the layering, look at the `roots` and `sinks` parameters.<br>
   *
   * If there are subgraphs or nodes not reachable from the central node,
   * they will be layouted separately. It is possibile to control how these subgraphs are positioned.
   *
   *
   * @example
   * ogma.layouts.sequential({
   *   direction: 'TB',  // Direction of the layout. Can be TB, BT, LR, or RL,
   *                   // where T = top, B = bottom, L = left, and R = right.
   *   duration: 300,  // Duration of the animation
   *   nodeDistance: 30,    // Number of pixels that separate nodes horizontally in the layout.
   *   levelDistance: 40     // Number of pixels between each layer in the layout.
   * }).then(function() {
   *   console.log('done');
   * });
   *
   * @param {object} params See <a href="#LayoutOptions" class="typeref">LayoutOptions</a> for common layout options.
   *
   * @param {NodeId[]|NodeList} [params.nodes]  List of affected nodes. If nothing provided, the whole graph will be used. If edges are provided too, then this list will be augmented with reached nodes from the passed edge list.
   * @param {EdgeId[]|EdgeList} [params.edges]  List of affected edges. If nothing provided, the adjacent edges to the node list is used.
   * @param {number}           [params.duration]     Duration of the animation when the graph is updated
   * @param {boolean}          [params.skipTextDrawing=true] Skip drawing labels during the layout. Improves performance and user experience.
   * @param {function(): void} [params.onSync]       Function called every time the graph is updated
   * @param {function(): void} [params.onEnd]        Function called after the last graph update
   * @param {boolean|LocateOptions} [params.locate=false]    Center on the graph bounding box when the layout is complete. You can also provide padding.
   *
   * @param {"TB"|"BT"|"LR"|"RL"}  [params.direction='TB'] Layout direction: Top-bottom/bottom-top/left-right/right-left.
   * @param {number}  [params.nodeDistance=50]  Desired distance between the nodes on one layer
   * @param {number}  [params.levelDistance=50] Desired distance between the layers of layout
   * @param {number}  [params.componentDistance=50]  Desired distance between the components in the layout
   * @param {"fit"|"grid"|"singleLine"}  [params.arrangeComponents='fit'] Desired fit for multiple disconnected components: "fit" attempt to optimize the screen space; "grid" adds a special behaviour for isolated nodes, arranging them together in a grid, then fit on the screen; "singleLine" arrange all disconnected components alongside.
   * @param {number}  [params.gridDistance=50] Desidered distance between isolated nodes when arranged in grid. Used only when "grid" arrangeComponent is enabled.
   * @param {NodeId[]|NodeList} [params.roots=[]] List of nodes to put at the top of the hierarchy
   * @param {NodeId[]|NodeList} [params.sinks=[]] List of nodes to put at the bottom of the hierarchy
   *
   * @return {Promise<void>}
   *
   * @demo layout-sequential
   */
  sequential: ReturnType<typeof _default$1>;
  /**
   * @method Ogma.layouts.grid
   * Arrange the nodes in a grid.
   * @param {object} params See <a href="#LayoutOptions" class="typeref">LayoutOptions</a> for common layout options.
   *
   * @param {NodeId[]|NodeList} [params.nodes]  List of affected nodes. If nothing provided, the whole graph will be used
   * @param {number}           [params.duration]     Duration of the animation when the graph is updated
   * @param {boolean}          [params.skipTextDrawing=true] Skip drawing labels during the layout. Improves performance and user experience.
   * @param {function(): void} [params.onSync]       Function called every time the graph is updated
   * @param {function(): void} [params.onEnd]        Function called after the last graph update
   * @param {boolean}          [params.useWebWorker=true] Indicates if the layout should be computed inside a web worker.
   * @param {boolean|LocateOptions} [params.locate=false]    Center on the graph bounding box when the layout is complete. You can also provide padding.
   *
   * @param {number} [params.rows]             Indicates the desired number of rows. If neither `rows` or `cols` are specified, the layout will attempt to make a square.
   * @param {number} [params.cols]             Indicates the desired number of cols. If neither `rows` or `cols` are specified, the layout will attempt to make a square.
   * @param {string} [params.sortBy]           Indicates the property from which the nodes must be sorted. Can also be `'random'`, in which case the node order is randomized.
   * @param {any} [params.sortFallbackValue]   Use this value for the nodes, for which the sorting attribute is undefined.
   * @param {boolean} [params.reverse] [false] If `true`, the nodes will be sorted in reverse order.
   *
   * @return {Promise<void>}
   *
   * @example Arrange the nodes in 3 rows, sorting them from the largest to the smallest.
   * ogma.layouts.grid({ sortBy: 'radius', reverse: true, rows: 3 });
   */
  grid: ReturnType<typeof _default>;
  /**
   * @method Ogma.layouts.stop
   * Stops currently running layout
   *
   * @example
   * // force stop a layout
   * ogma.layouts.forceLink();
   * setTimeout(function() {
   *   ogma.layouts.stop();
   * }, 200);
   */
  stop: () => Promise<void>;
}

declare class MouseAPI<ND, ED> extends APIModule<ND, ED> {
  move: (coords: Point) => Promise<void>;
  down: (coords: Point) => Promise<void>;
  up: (coords: Point) => Promise<void>;
  click: (coords: Point) => Promise<void>;
  rightClick: (coords: Point) => Promise<void>;
  doubleclick: (coords: Point) => Promise<void>;
  drag: (start: Point, end: Point) => Promise<void>;
  wheel: (coords: { x: number; y: number; delta: number }) => Promise<void>;
}

interface RulesMapOptions {
  field: PropertyPath;
  values?: {
    [key: string]: any;
  };
  fallback?: any | any[];
}
interface RulesSliceOptions {
  field: PropertyPath;
  values:
    | {
        nbSlices: number;
        min: number;
        max: number;
      }
    | any[];
  stops?:
    | {
        min?: number;
        max?: number;
      }
    | number[];
  fallback?: any;
  reverse?: boolean;
}
declare class RulesAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.rules.map
   * Create a function that, given a node or edge, returns a value based on a mapping "any data -> any value".
   * @param {object} options
   * @param {PropertyPath} options.field Data property path on which to retrieve the value to be mapped
   * @param {{[key: string]: any}} [options.values] Mapping that associate data value to output value.
   * @param {any|Array<any>} [options.fallback] Value(s) to assign when the data value is not specified in the mapping.
   * @return {function(elt: Node|Edge): any}
   * @example
   * var colorMapping = ogma.rules.map({
   *   field: 'country', // The mapping will use the "country" data property of the node/edge
   *   values: {
   *     'France': 'blue',
   *     'Italy': 'green',
   *     'Spain': 'red'
   *   },
   *   fallback: ['white', 'black'] // Other countries will alternatively be colored in black or white
   * });
   *
   * // Add this function as a style rule
   * ogma.style.addRule({
   *   nodeAttributes: {
   *     color: colorMapping
   *   }
   * });
   */
  map: (
    options: RulesMapOptions
  ) => (elt: Node$1<ND, ED> | Edge<ED, ND>) => any;
  /**
   * @method Ogma.rules.slices
   * Create a function that, given a node or edge, returns a value based on a mapping "numerical data -> any value"
   * @param {object} options
   * @param {PropertyPath} options.field Data property path to "slice"
   * @param {{nbSlices: number, min: number, max: number}|Array<any>} options.values
   * Indicates the possible output values for the slices. If an object is specified, there will
   * be `nbSlices` possible output values, with values from `min` to `max` (at regular intervals).
   * If an array is specified, it indicates the different possible values.
   * @param {{min: number, max: number}|Array<number>} [options.stops]
   * Indicates the boundaries of the slices. If an object is specified, it must indicates the minimum and maximum values the
   * data property can have. If it's an array, two consecutive elements indicate the boundaries for a slice. By default, the
   * slices will be determined using the current minimum and maximum value of the data property.
   * @param {any} [options.fallback] Value to assign when the property is not a number.
   * @param {boolean} [options.reverse=false] By default low values for data properties are given low output values. Setting this to `true` reverse this behavior.
   * @return {function(elt: Node|Edge): any}
   * @example
   * // Assigning the size based on a numerical property
   * var radiusRule = ogma.rules.slices({
   *   field: 'nbEmployees',
   *   // Nodes will be assigned one among 5 different radiuses, between 2
   *   // and 10, depending on their "nbEmployees" data property
   *   values: { nbSlices: 5, min: 2, max: 10 },
   *   // For values 1-200, the size will be 2, for values 201-400
   *   // the size will be 4, etc until 801-1000 -> 10
   *   stops: { min: 1, max: 1000 },
   *   // // Nodes for which the `nbEmployees` property is not a number will be assigned the size 1
   *   fallback: 1
   * });
   *
   * ogma.styles.addRule({
   *   nodeAttributes: {
   *     radius: radiusRule
   *   }
   * });
   * @example
   * // Assigning the color based on a numerical property
   *
   * // If `height` is less than 0, the node will be in blue.
   * // If it's between 0 and 100, it will be colored in green.
   * // If it's more than 100, it will be colored in brown
   * var colorRule = ogma.rules.slices({
   *   field: 'height',
   *   values: ['blue', 'green', 'brown'],
   *   stops: [0, 100],
   *   fallback: 'white'
   * });
   *
   * ogma.styles.addRule({
   *   nodeAttributes: {
   *     color: colorRule
   *   }
   * });
   */
  slices: (
    options: RulesSliceOptions
  ) => (elt: Node$1<ND, ED> | Edge<ED, ND>) => any;
  /**
   * @method Ogma.rules.template
   * Returns a function that, given a node or edge, returns a string by replacing a pattern in the string by the
   * according data property.
   * @param {string} template String in which "{{foo}}}" will be replaced by the data property "foo".
   * @return {function(elt: Node|Edge): any}
   * @example
   * var textRule = ogma.rules.template('Age: {{age}}\nName: {{name}}');
   *
   * ogma.styles.addRule({
   *   nodeAttributes: {
   *     text: textRule
   *   }
   * });
   */
  template: (template: string) => (elt: Node$1<ND, ED> | Edge<ED, ND>) => any;
}

/**
 * @extends Options.interactions
 * @property {object}   [selection]
 * @property {boolean}  [selection.enabled=true]               Indicates if selection with the mouse should be enabled
 * @property {KeyName|null} [selection.multiSelectionKey="ctrl"]  Indicates the key that must be pressed to select multiple nodes/edges at a time.
 */
declare class SelectionAPI<ND, ED> {
  /**
   * @method Ogma.clearSelection
   * Clear the selection.
   * @example
   * ogma.clearSelection();
   */
  clearSelection(): void;
  /**
   * @method Ogma.getSelectedNodes
   * Returns all nodes that are selected.
   * @return {NodeList}
   * @example
   * console.log('Nodes selected: ' + ogma.getSelectedNodes().getId());
   */
  getSelectedNodes(): NodeList<ND, ED>;
  /**
   * @method Ogma.getNonSelectedNodes
   * Returns all nodes that are not selected.
   * @return {NodeList}
   */
  getNonSelectedNodes(): NodeList<ND, ED>;
  /**
   * @method Ogma.getSelectedEdges
   * Returns all edges that are selected.
   * @return {EdgeList}
   */
  getSelectedEdges(): EdgeList<ED, ND>;
  /**
   * @method Ogma.getNonSelectedEdges
   * Returns all edges that are not selected.
   * @return {EdgeList}
   */
  getNonSelectedEdges(): EdgeList<ED, ND>;
}

/**
 * @public
 * @property {object} [interactions]
 */
/**
 * @public
 * @extends OgmaParameters
 * @property {Options} [options] Settings for all the modules.
 */
declare class SettingsAPI<ND, ED> {
  /**
   * @method Ogma.setOptions
   * Update the options of Ogma.
   * @param {Options} options
   */
  setOptions(options: Options): Options;
  /**
   * @method Ogma.getOptions
   * Get options of the Ogma instance.
   * @returns {Options}
   */
  getOptions(): Options;
}

/**
 * @public
 * @property {NodeAttributesValue} [options.nodeAttributes]
 * @property {EdgeAttributesValue} [options.edgeAttributes]
 * @property {NodeDependencies}    [options.nodeDependencies]
 * @property {EdgeDependencies}    [options.edgeDependencies]
 * @property {NodeOutput}          [options.nodeOutput]
 * @property {EdgeOutput}          [options.edgeOutput]
 */
interface StyleClassDefinition<ND, ED> {
  nodeAttributes?: NodeAttributesValue<ND, ED> | null;
  edgeAttributes?: EdgeAttributesValue<ED, ND> | null;
  nodeDependencies?: NodeDependencies;
  edgeDependencies?: EdgeDependencies;
  nodeOutput?: NodeOutput;
  edgeOutput?: EdgeOutput;
}
/**
 * @public
 * @class StyleClass
 */
declare class StyleClass<ND = any, ED = any> {
  /**
   * @method StyleClass.getName
   * Returns the name of the class.
   * @returns {string}
   */
  getName(): string;
  /**
   * @method StyleClass.getIndex
   * Returns the index of the class in the internal class array. A higher index class is applied after a lower
   * index class.
   * @returns {number}
   */
  getIndex(): number;
  /**
   * @method StyleClass.setIndex
   * Set the index of the class in the internal class array. A higher index class is applied after a lower
   * index class.
   * @param {number} index
   */
  setIndex(index: any): void;
  /**
   * @method StyleClass.update
   * Updates the attributes assigned to nodes and edges that have that class.
   * @param {object} options
   * @param {NodeAttributesValue} [options.nodeAttributes]
   * @param {EdgeAttributesValue} [options.edgeAttributes]
   * @param {boolean} [options.fullOverwrite=false] Indicates if the specified attributes should be merge with current
   * ones (false) or if the specified attributes should entirely replace the current ones.
   * @param {NodeDependencies}    [options.nodeDependencies]
   * @param {EdgeDependencies}    [options.edgeDependencies]
   * @param {NodeOutput}          [options.nodeOutput]
   * @param {EdgeOutput}          [options.edgeOutput]
   * @example
   * var myClass = ogma.styles.createClass({ name: 'myCustomClass', nodeAttributes: { color: 'green' } });
   * ogma.getNode('n0').addClass('myCustomClass');
   * myClass.update({ nodeAttributes: { color: 'red' } });
   * ogma.getNode('n0').getAttribute('color'); // 'red'
   */
  update(options: StyleClassDefinition<ND, ED>): this;
  /**
   * @method StyleClass.getDefinition
   * Returns the node and edge attributes associated with the class.
   * @returns {StyleClassDefinition}
   */
  getDefinition(): Partial<ClassOptions<ND, ED>>;
  /**
   * @method StyleClass.getNodes
   * Returns the list of nodes that have the class. Does not include filtered nodes.
   * @param Filter [filter] filter to apply to nodes
   * @returns {NodeList}
   */
  getNodes(filter?: Filter): NodeList<any, any>;
  /**
   * @method StyleClass.getEdges
   * Returns the list of edges that have the class. Does not include filtered edges.
   * @param {Filter} [filter] filter to apply to edges
   * @returns {EdgeList}
   */
  getEdges(filter?: Filter): EdgeList<any, any>;
  /**
   * @method StyleClass.clearNodes
   * Remove the class from all nodes.
   * @param {Filter} [filter] filter to apply to nodes
   */
  clearNodes(filter?: Filter): void;
  /**
   * @method StyleClass.clearEdges
   * Remove the class from all edges.
   * @param {Filter} [filter] filter to apply to edges
   */
  clearEdges(filter?: Filter): void;
  /**
   * @method StyleClass.add
   * Add the class to the specified node(s)/edge(s). Equivalent to to `elements.addClass(myClass.getName())`.
   * @param {Node|Edge|NodeList|EdgeList} elements
   */
  add(
    elements:
      | Node$1<ND, ED>
      | Edge<ED, ND>
      | NodeList<ND, ED>
      | EdgeList<ED, ND>
  ): void;
  /**
   * @method StyleClass.remove
   * Remove the class from the specified node(s)/edge(s). Equivalent to to `elements.removeClass(myClass.getName())`.
   * @param {Node|Edge|NodeList|EdgeList} elements
   */
  remove(
    elements:
      | Node$1<ND, ED>
      | Edge<ED, ND>
      | NodeList<ND, ED>
      | EdgeList<ED, ND>
  ): void;
}

interface AddEdgeRule<ND, ED> {
  (
    selector: EdgeSelector<ED, ND>,
    rule: EdgeAttributesValue<ED, ND>
  ): StyleRule<ND, ED>;
  (rule: EdgeAttributesValue<ED, ND>): StyleRule<ND, ED>;
}
interface AddNodeRule<ND, ED> {
  (
    selector: NodeSelector<ND, ED>,
    rule: NodeAttributesValue<ND, ED>
  ): StyleRule<ND, ED>;
  (rule: NodeAttributesValue<ND, ED>): StyleRule<ND, ED>;
}
/**
 * @extends Options
 * @property {CursorStyle} [cursor.node="pointer"] Cursor style when a node is hovered.
 * @property {CursorStyle} [cursor.edge="pointer"] Cursor style when an edge is hovered.
 */
interface ClassOptions<ND, ED> {
  name: string;
  nodeAttributes?: NodeAttributesValue<ND, ED> | null;
  edgeAttributes?: EdgeAttributesValue<ED, ND> | null;
  nodeDependencies?: NodeDependencies;
  edgeDependencies?: EdgeDependencies;
  nodeOutput?: NodeOutput;
  edgeOutput?: EdgeOutput;
}
interface theme {
  nodeAttributes: NodeAttributes;
  edgeAttributes: EdgeAttributes;
  selectedNodeAttributes: NodeAttributes;
  selectedEdgeAttributes: EdgeAttributes;
  hoveredNodeAttributes: NodeAttributes;
  hoveredEdgeAttributes: EdgeAttributes;
}
declare class StylesAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.styles.setNodesVisibility
   * Show or hide all the nodes. This method has an internal counter; if it's called with `false`, the counter is
   * decreased by one, if it's called with `true` the counter is increased by one. The counter starts at 0, and
   * cannot go lower than 0.
   * The nodes are shown if the counter is equal to 0.
   * @param {boolean} value
   */
  setNodesVisibility: (value: boolean) => void;
  /**
   * @method Ogma.styles.setEdgesVisibility
   * Show or hide all the edges. This method has an internal counter; if it's called with `false`, the counter is
   * decreased by one, if it's called with `true` the counter is increased by one. The counter starts at 0, and
   * cannot go lower than 0.
   * The edges are shown if the counter is equal to 0.
   * @param {boolean} value
   */
  setEdgesVisibility: (value: boolean) => void;
  /**
   * @method Ogma.styles.setNodeTextsVisibility
   * Show or hide all the node texts. This method has an internal counter; if it's called with `false`, the counter is
   * decreased by one, if it's called with `true` the counter is increased by one. The counter starts at 0, and
   * cannot go lower than 0.
   * The node texts are shown if the counter is equal to 0.
   * @param {boolean} value
   */
  setNodeTextsVisibility: (value: boolean) => void;
  /**
   * @method Ogma.styles.setEdgeTextsVisibility
   * Show or hide all the edge texts. This method has an internal counter; if it's called with `false`, the counter is
   * decreased by one, if it's called with `true` the counter is increased by one. The counter starts at 0, and
   * cannot go lower than 0.
   * The edge texts are shown if the counter is equal to 0.
   * @param {boolean} value
   */
  setEdgeTextsVisibility: (value: boolean) => void;
  /**
   * @method Ogma.styles.addRule
   * Add a style rule, applying the specified attributes to all nodes & edges that match the specified selector.
   * The style of a node is re-computed when its degree or data changes, and automatically assigned when a node is added.
   * Rules are applied one after another. The latest added rule is applied last. Rules are applied before
   * attributes assigned through `setAttributes`, which are applied before classes.
   * @param {object} [options]
   * @param {NodeAttributesValue} [options.nodeAttributes] Attributes that will be assigned to the nodes.
   * @param {EdgeAttributesValue} [options.edgeAttributes] Attributes that will be assigned to the edges.
   * @param {NodeSelector}        [options.nodeSelector] Indicates if the rule should be applied to a given node. If unspecified, the rule is applied to all nodes.
   * @param {EdgeSelector}        [options.edgeSelector] Indicates if the rule should be applied to a given edge. If unspecified, the rule is applied to all edges.
   * @param {NodeDependencies}    [options.nodeDependencies] (Advanced - see [tutorial](tutorials/styling-optimization/))
   * Attributes on which the functions (if any) in the `nodeAttributes` field depend
   * @param {EdgeDependencies}    [options.edgeDependencies] (Advanced - see [tutorial](tutorials/styling-optimization/))
   * Attributes on which the functions (if any) in the `edgeAttributes` field depend
   * @param {NodeOutput} [options.nodeOutput] (Advanced - see [tutorial](tutorials/styling-optimization/))
   * Node attributes assigned by the rule. If unspecified, they are inferred from the `nodeAttributes` field.
   * This field is used together with the dependency fields of other rules/classes to know which rules/classes should be
   * updated when this rule is updated.
   * @param {EdgeOutput} [options.edgeOutput] (Advanced - see [tutorial](tutorials/styling-optimization/))
   * Edge attributes assigned by the rule. If unspecified, they are inferred from the `edgeAttributes` field.
   * This field is used together with the dependency fields of other rules/classes to know which rules/classes should be
   * updated when this rule is updated.
   * @returns {StyleRule}
   * @example
   * // Set the same color and size for all nodes, and the same shape to all edges
   * ogma.styles.addRule({
   *   nodeAttributes: {
   *     color: 'red',
   *     radius: 10
   *   },
   *   edgeAttributes: {
   *     shape: {
   *       body: 'line',
   *       style: 'plain',
   *       head: 'arrow',
   *       tail: null
   *     }
   *   }
   * });
   * @example
   * // Use a selector to restrict the rule to a subset of the graph
   * ogma.styles.addRule({
   *   nodeSelector: function(node) {
   *     return node.getData('a.b.c') !== undefined;
   *   },
   *   nodeAttributes: {
   *     color: 'red',
   *     radius: 10
   *   }
   * });
   * @example
   * // Assign node color and size using a function
   * ogma.styles.addRule({
   *   nodeAttributes: {
   *     color: function(node) {
   *       if (node.getData('foo') === 'bar') {
   *         return 'red';
   *       } else {
   *         return 'green';
   *       }
   *     },
   *     radius: function(node) {
   *       return node.getDegree() + 1;
   *     }
   *   }
   * });
   * @example
   * // It's possible to provide a function at any level of nesting
   * // Here we provide a function at the badges level for nodes and at the root level for edges
   * ogma.styles.addRule({
   *   nodeAttributes: {
   *     shape: 'square',
   *     badges: function(node) {
   *       // Display the node degree in either the top-left badge or the top-right badge depending on the `foo` data
   *       var badge = { text: node.getDegree() };
   *
   *       if (node.getData('foo') === 'bar') {
   *         return { topLeft: badge };
   *       } else {
   *         return { topRight: badge };
   *       }
   *     }
   *   },
   *   edgeAttributes: function(edge) {
   *     // We either want a blue arrow or a red line depending on the edge's data
   *     if (edge.getData('property') === 'value') {
   *       return {
   *         color: 'blue',
   *         shape: 'arrow'
   *       };
   *     } else {
   *       return {
   *         color: 'red',
   *         shape: 'line'
   *       };
   *     }
   *   }
   * });
   */
  addRule: (options?: NodeStyleRuleDefinition<ND, ED>) => StyleRule<ND, ED>;
  /**
   * @method Ogma.styles.getRuleList
   * Returns the list of all rules, in the order they are applied.
   * @returns {Array<StyleRule>}
   */
  getRuleList: () => StyleRule<ND, ED>[];
  /**
   * @method Ogma.styles.addNodeRule
   * Add a rule that impacts only nodes.
   * @param {NodeSelector} [selector]
   * @param {NodeAttributesValue} rule
   * @returns {StyleRule}
   */
  addNodeRule: AddNodeRule<ND, ED>;
  /**
   * @method Ogma.styles.addEdgeRule
   * Add a rule that impacts only edges.
   * @param {EdgeSelector} [selector]
   * @param {EdgeAttributesValue} rule
   * @returns {StyleRule}
   */
  addEdgeRule: AddEdgeRule<ND, ED>;
  /**
   * @method Ogma.styles.getNodeRules
   * Returns all rules that only impact nodes.
   * @returns {Array<StyleRule>}
   */
  getNodeRules: () => StyleRule<ND, ED>[];
  /**
   * @method Ogma.styles.getEdgeRules
   * Returns all rules that only impact edges.
   * @returns {Array<StyleRule>}
   */
  getEdgeRules: () => StyleRule<ND, ED>[];
  /**
   * @method Ogma.styles.createClass
   * Create a new class for nodes & edges. Classes are similar to style rules, except they are assigned on an
   * individual basis instead of according to a selector (assigned only to the nodes/edges that have been
   * assigned the class with `node.addClass('className')`).
   * @param {object} options
   * @param {string}              options.name Name of the class to be created.
   * @param {NodeAttributesValue} [options.nodeAttributes] Attributes applied to nodes when they have this class.
   * @param {EdgeAttributesValue} [options.edgeAttributes] Attributes applied to edges when they have this class.
   * @param {NodeDependencies}    [options.nodeDependencies] (Advanced - see [tutorial](tutorials/styling-optimization/))
   * Attributes on which the functions (if any) in the `nodeAttributes` field depend
   * @param {EdgeDependencies}    [options.edgeDependencies] (Advanced - see [tutorial](tutorials/styling-optimization/))
   * Attributes on which the functions (if any) in the `edgeAttributes` field depend
   * @param {NodeOutput} [options.nodeOutput] (Advanced - see [tutorial](tutorials/styling-optimization/))
   * Node attributes assigned by the class. If unspecified, they are inferred from the `nodeAttributes` field.
   * This field is used together with the dependency fields of other rules/classes to know which rules/classes should be
   * updated when this class is assigned/removed to/from a node.
   * @param {EdgeOutput} [options.edgeOutput] (Advanced - see [tutorial](tutorials/styling-optimization/))
   * Edge attributes assigned by the class. If unspecified, they are inferred from the `edgeAttributes` field.
   * This field is used together with the dependency fields of other rules/classes to know which rules/classes should be
   * updated when this class is assigned/removed to/from a edge.
   * @returns {StyleClass}
   * @example
   * ogma.styles.createClass({ name: 'myCustomClass', nodeAttributes: {color: 'green'} });
   *
   * ogma.getNode('n0').addClass('myCustomClass');
   * ogma.getNode('n0').removeClass('myCustomClass');
   * @example
   * // Create a class that increase the radius of the nodes
   * ogma.styles.createClass({
   *   name: 'myOtherClass',
   *   nodeAttributes: {
   *     radius: function (node) {
   *       return node.getAttribute('radius') + 1;
   *     }
   *   }
   * });
   */
  createClass: (options: ClassOptions<ND, ED>) => StyleClass<ND, ED>;
  /**
   * @method Ogma.styles.getClass
   * Returns the class with the specified name. Returns `null` if no class has the specified name.
   * @param {string} className
   * @returns {StyleClass|null}
   */
  getClass: (className: string) => StyleClass<ND, ED> | null;
  /**
   * @method Ogma.styles.getClassList
   * Returns the list of existing classes by increasing priority, excluding builtin classes.
   * @returns {Array<StyleClass>}
   */
  getClassList: () => StyleClass<ND, ED>[];
  /**
   * @method Ogma.styles.setHoveredNodeAttributes
   * Set the style of nodes when they are hovered. If `null` is specified, no style will be applied to hovered nodes.
   * @param {NodeAttributesValue|null} attributes Attributes to apply to hovered nodes
   * @param {boolean} [fullOverwrite=false] If `false`, the specified attributes will be merged with the current attributes.
   * If `true`, the attributes applied on hover will be exactly the ones supplied.
   * @example
   * ogma.styles.setHoveredNodeAttributes({
   *   outline: false, // Disabling the shadow on hover
   *   outerStroke: {
   *     color: 'green' // Changing the shadow on hover,
   *  },
   *   text: function (node) { return node.getData('label'); }
   * });
   * @example
   * // Removing the style change on hover
   * ogma.styles.setHoveredNodeAttributes(null);
   * @example
   * // Restoring the default node hover attributes:
   * ogma.styles.setHoveredNodeAttributes({
   *   outline: true,
   *   outerStroke: {
   *     color: 'red',
   *     width: 5
   *   },
   *   text: {
   *     backgroundColor: 'rgb(220, 220, 220)',
   *     minVisibleSize: 0
   *   }
   * });
   */
  setHoveredNodeAttributes: (
    attributes: NodeAttributesValue<ND, ED> | null,
    fullOverwrite?: boolean | undefined
  ) => void;
  /**
   * @method Ogma.styles.setHoveredEdgeAttributes
   * Set the style of edges when they are hovered. If `null` is specified, no style will be applied to hovered edges.
   * @param {EdgeAttributesValue|null} attributes Attributes to apply to hovered edges
   * @param {boolean} [fullOverwrite=false] If `false`, the specified attributes will be merged with the current attributes.
   * If `true`, the attributes applied on hover will be exactly the ones supplied.
   * @example
   * // Restoring the default edge hover attributes:
   * ogma.styles.setHoveredEdgeAttributes({
   *   outline: true,
   *   color: 'red',
   *   text: {
   *     backgroundColor: 'rgb(220, 220, 220)',
   *     minVisibleSize: 0
   *   }
   * });
   */
  setHoveredEdgeAttributes: (
    attributes: EdgeAttributesValue<ED, ND> | null,
    fullOverwrite?: boolean | undefined
  ) => void;
  /**
   * @method Ogma.styles.setSelectedNodeAttributes
   * Set the style of nodes when they are selected. If `null` is specified, no style will be applied to selected nodes.
   * @param {NodeAttributesValue|null} attributes Attributes to apply to selected nodes
   * @param {boolean} [fullOverwrite=false] If `false`, the specified attributes will be merged with the current attributes.
   * If `true`, the attributes applied on selection will be exactly the ones supplied.
   * @example
   * // Change the outer stroke color on selection
   * ogma.styles.setSelectedNodeAttributes({
   *   outerStroke:{
   *     color: 'green'
   *   }
   * });
   */
  setSelectedNodeAttributes: (
    attributes: NodeAttributesValue<ND, ED> | null,
    fullOverwrite?: boolean | undefined
  ) => void;
  /**
   * @method Ogma.styles.setSelectedEdgeAttributes
   * Set the style of edges when they are selected. If `null` is specified, no style will be applied to selected edges.
   * @param {EdgeAttributesValue|null} attributes Attributes to apply to selected edges
   * @param {boolean} [fullOverwrite=false] If `false`, the specified attributes will be merged with the current attributes.
   * If `true`, the attributes applied on selection will be exactly the ones supplied.
   * @example
   * // Change the color on selection
   * ogma.styles.setSelectedEdgeAttributes({
   *   color: 'green'
   * });
   */
  setSelectedEdgeAttributes: (
    attributes: EdgeAttributesValue<ED, ND> | null,
    fullOverwrite?: boolean | undefined
  ) => void;
  /**
   * @method Ogma.styles.setTheme
   * Sets the theme for Ogma
   * @param {NodeAttributes} [nodeAttributes] default node attributes
   * @param {EdgeAttributes} [edgeAttributes] default edge attributes
   * @param {NodeAttributes} [selectedNodeAttributes] selected node attributes
   * @param {EdgeAttributes} [selectedEdgeAttributes] selected edge attributes
   * @param {NodeAttributes} [hoveredNodeAttributes] hovered node attributes
   * @param {EdgeAttributes} [hoveredEdgeAttributes] hovered edge attributes
   */
  setTheme: ({
    nodeAttributes,
    edgeAttributes,
    selectedNodeAttributes,
    selectedEdgeAttributes,
    hoveredNodeAttributes,
    hoveredEdgeAttributes
  }: theme) => void;
}

declare class ClassesAPI<ND, ED> {
  /**
   * @method Ogma.getNodesByClassName
   * Returns the nodes that have the specified class.
   * Same effect as [`StyleClass.update`](#StyleClass-getNodes).
   * @param {string} className
   * @param {Filter} [filter] filter to apply to nodes
   * @returns {NodeList}
   */
  getNodesByClassName(className: string, filter?: Filter): NodeList<ND, ED>;
  /**
   * @method Ogma.getEdgesByClassName
   * Returns the edges that have the specified class.
   * Same effect as [`StyleClass.update`](#StyleClass-getEdges).
   * @param {string} className
   * @param {Filter} [filter] filter to apply to edges
   * @returns {EdgeList}
   */
  getEdgesByClassName(className: string, filter?: Filter): EdgeList<ED, ND>;
}

/**
 * @public
 * @class PropertyInformation
 * Retrieved from `watcher.getPropertyInfo()`.
 */
declare class PropertyInformation {
  /**
   * @method PropertyInformation.isNode
   * Indicates if it is a node or edge property.
   * @return {boolean}
   */
  isNode(): boolean;
  /**
   * @method PropertyInformation
   * Indicates the path of the data property
   * @return {Array<string>}
   */
  getPath(): string[];
  /**
   * @method PropertyInformation.getBoundaries
   * If there is at least one numerical value for this property, returns the
   * minimum and maximum value for this property across the graph. Returns
   * `null` if there is no numerical value for that property.
   * @return {null|{min: number, max: number}}
   */
  getBoundaries(): null | {
    min: number;
    max: number;
  };
  /**
   * @method PropertyInformation.getValues
   * Returns the different values for this property.
   * @return {Array<any>}
   */
  getValues(): any[];
  /**
   * @method PropertyInformation.getValueCount
   * Returns the number of nodes/edges for which the property has the specified value.
   * @param {any} value
   * @return {number}
   */
  getValueCount(value: any): number;
  /**
   * @method PropertyInformation.getCount
   * Returns the number of nodes/edges for which the property is different from `undefined`
   * @return {number}
   */
  getCount(): number;
  /**
   * @method PropertyInformation.getType
   * Returns the type of the property.
   * @return {"any"|"number"|"undefined"} If there is at least one non-number (excluding `undefined`) value, returns `'any'`.
   * If there are only numerical values for that property, returns `'number'`. If no node/edge has a value for that property,
   * returns `'undefined'`.
   */
  getType(): 'any' | 'number' | 'undefined';
}

/**
 * @public
 * @class NonObjectPropertyWatcher
 * Retrieved from `ogma.schema.watchNodeNonObjectProperty()` or `ogma.schema.watchEdgeNonObjectProperty()`.
 */
declare class NonObjectPropertyWatcher<ND, ED> {
  /**
   * @method NonObjectPropertyWatcher.onUpdate
   * Triggers the specified function when the property is updated,
   * @param {function (info: PropertyInformation)} handler
   */
  onUpdate(handler: (info: PropertyInformation) => void): void;
  /**
   * @method NonObjectPropertyWatcher.getPropertyInfo
   * Retrieve some information on the property being watched.
   * @return {PropertyInformation}
   */
  getPropertyInfo(): PropertyInformation;
  /**
   * @method NonObjectPropertyWatcher.getPath
   * Returns the path of the data property being watched
   * @return {Array<string>}
   */
  getPath(): string[];
  /**
   * @method NonObjectPropertyWatcher.destroy
   * Stops the watcher from being updated
   */
  destroy(): void;
}

/**
 * @public
 * @class ObjectPropertyWatcher
 * Retrieved from `ogma.schema.watchNodeProperties()` or `ogma.schema.watchEdgeProperties()`.
 */
declare class ObjectPropertyWatcher {
  /**
   * @method ObjectPropertyWatcher.onPropertyAdded
   * Triggers the specified function when a new sub-property is added (at least one node has a value for it).
   * @param {function (property: string, info: PropertyInformation)} handler
   * @return {ObjectPropertyWatcher}
   */
  onPropertyAdded(handler: any): this;
  /**
   * @method ObjectPropertyWatcher.onPropertyRemoved
   * Triggers the specified function when a new sub-property is removed (no node has a value for it).
   * @param {function (property: string, info: PropertyInformation)} handler
   * @return {ObjectPropertyWatcher}
   */
  onPropertyRemoved(handler: any): this;
  /**
   * @method ObjectPropertyWatcher.onPropertyUpdated
   * Triggers when a sub-property of the watched property is updated.
   * @param {function (property: string, info: PropertyInformation)} handler
   * @return {ObjectPropertyWatcher}
   */
  onPropertyUpdated(handler: any): this;
  /**
   * @method ObjectPropertyWatcher.getPath
   * Returns the path of the data property being watched
   * @return {Array<string>}
   */
  getPath(): string[];
  /**
   * @method ObjectPropertyWatcher.getProperties
   * Returns the names of the sub-property of the watched property.
   * @return {Array<string>}
   */
  getProperties(): string[];
  /**
   * @method ObjectPropertyWatcher.getPropertyInfo
   * Retrieve some information on the specified sub-property.
   * @param {string} name
   * @return {PropertyInformation|null}
   */
  getPropertyInfo(name: any): PropertyInformation | null;
  /**
   * @method ObjectPropertyWatcher.destroy
   * Stops the watcher from being updated.
   */
  destroy(): void;
}

/**
 * @public
 * If a string or array is specified, it indicates the `path` property.
 * @property {PropertyPath} [path] Path of the data property to watch. If not specified, watch the root property.
 * @property {"visible"|"all"} [filter="visible"] Indicates which elements the watcher takes into account. If "visible" (default),
 * only the non-filtered elements will be taken into account. If "all", all elements will be taken into account regardless of
 * whether they are filtered or not.
 * @property {boolean} [unwindArrays=false] If `true`, array values will be treated as multiple individual values instead of one
 */
interface WatcherOptions {
  path?: PropertyPath;
  filter?: Filter;
  unwindArrays?: boolean;
}
declare class SchemaAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.schema.watchNodeObjectProperty
   * Watch for addition, removal, and updates of the sub-properties of the
   * specified node data property.
   * @param {WatcherOptions} [options] Options to use by the watcher
   * @return {ObjectPropertyWatcher}
   * @example
   * var ogma = new Ogma();
   * ogma.addNodes([{id: 0, data: {foo: 'bar', a: 'value'}}, {id: 1, data: {a: 'value2'}}]);
   *
   * var watcher = ogma.schema.watchNodeObjectProperty();
   *
   * console.log(JSON.stringify(watcher.getProperties())); // ['bar', 'a']
   * console.log(JSON.stringify(watcher.getPropertyInfo('a').getValues())); // ['value1', 'value2']
   *
   * watcher.onPropertyAdded(function (propertyName) {
   *   console.log('at least one node now has a value for the ' + propertyName + ' data property.');
   * });
   *
   * ogma.getNode(1).setData('quality', 'good'); // Outputs: 'at least one node now has a value for the quality data property.'
   */
  watchNodeObjectProperty: (options: WatcherOptions) => ObjectPropertyWatcher;
  /**
   * @method Ogma.schema.watchEdgeObjectProperty
   * Watch for addition, removal, and updates of the sub-properties of the
   * specified edge data property.
   * @param {WatcherOptions} [options] Options to use by the watcher
   * @return {ObjectPropertyWatcher}
   */
  watchEdgeObjectProperty: (options: WatcherOptions) => ObjectPropertyWatcher;
  /**
   * @method Ogma.schema.watchNodeNonObjectProperty
   * Provide information on the specified node data property, and notifies when
   * the property is modified.
   * @param {WatcherOptions} [options] Options to use by the watcher
   * @return {NonObjectPropertyWatcher}
   * @example
   * var ogma = new Ogma();
   * ogma.addNodes([{id: 0, data: {properties: {foo: 'bar', a: 'value'}}}, {id: 1, data: {properties: {a: 'value2'}}}]);
   *
   * var watcher = ogma.schema.watchNodeObjectProperty(['properties', 'a');
   *
   * console.log(JSON.stringify(watcher.getPropertyInfo().getValues())); // ['value1', 'value2']
   *
   * watcher.onUpdate(function () {
   *   console.log(JSON.stringify(watcher.getPropertyInfo().getValues()));
   * });
   *
   * ogma.getNode(1).setData(['properties', 'a'], 'value3'); // Outputs: ['value1', 'value3']
   */
  watchNodeNonObjectProperty: (
    options: WatcherOptions
  ) => NonObjectPropertyWatcher<ND, ED>;
  /**
   * @method Ogma.schema.watchEdgeNonObjectProperty
   * Provide information on the specified edge data property, and notifies when the property is modified.
   * @param {WatcherOptions} [options] Options to use by the watcher
   * @return {NonObjectPropertyWatcher}
   */
  watchEdgeNonObjectProperty: (
    options: WatcherOptions
  ) => NonObjectPropertyWatcher<ND, ED>;
}

interface LassoOptions<ND = any, ED = any> {
  strokeColor?: Color;
  strokeWidth?: number;
  fillColor?: Color | null;
  cursorStyle?: CursorStyle;
  callback?: (payload: {
    nodes: NodeList<ND, ED>;
    edges: EdgeList<ND, ED>;
  }) => void;
  bothExtremities?: boolean;
}

declare class LassoAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.lasso.enable
   * Enables the lasso selection tool
   * @param {object}                [options]
   * @param {Color}                 [options.strokeColor="#00C3FF"]           Lasso stroke color
   * @param {number}                [options.strokeWidth=1]                   Lasso stroke width
   * @param {Color}                 [options.fillColor="rgba(0,195,255,0.1)"] Lasso fill color
   * @param {CursorStyle}           [options.cursorStyle="cell"]              Cursor style when the lasso is active (CSS property)
   * @param {function(payload: {nodes: NodeList, edges: EdgeList})} [options.callback]
   * Called with the nodes and edges surrounded by the lasso.
   * By default, add the nodes to the selection (edges are ignored).
   * @param {boolean}               [options.bothExtremities=false] If set to `true`, edge will
   * be passed to `callback` only if both of its ends are inside the selected area.
   * By default, just one endpoint inside the selection is enough to be included.
   */
  enable: (options?: LassoOptions<any, any> | undefined) => this;
  /**
   * @method Ogma.tools.lasso.disable
   * Disables lasso tool.
   */
  disable: () => this;
  /**
   * @method Ogma.tools.lasso.enabled
   * Check whether the lasso tool is enabled.
   * @return {boolean}
   */
  enabled: () => boolean;
}

interface ConnectNodesOptions<ND, ED> {
  continueDrawing?: boolean;
  cursorStyle?: CursorStyle;
  strokeColor?: Color;
  strokeWidth?: number;
  dashLength?: number;
  dashed?: boolean;
  createNodes?: boolean;
  condition?: (source: Node$1<ND, ED>, target?: Node$1<ND, ED>) => boolean;
  onNodeCreated?: (node: Node$1<ND, ED>) => void;
  onEdgeCreated?: (edge: Edge<ED, ND>) => void;
  createEdge?: (edge: RawEdge<ED>) => RawEdge<ED>;
  createNode?: (node: RawNode<ND>) => RawNode<ND>;
  onComplete?: (
    source: Node$1<ND, ED>,
    target: Node$1<ND, ED>,
    edge?: Edge<ED, ND>
  ) => void;
}
declare class ConnectNodesAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.connectNodes.enable
   * Enable the "connectNodes" mode, allowing the user to draw edges with the mouse.
   * @param {object} [options]
   * @param {boolean} [options.continueDrawing=false] If `true`, the mode will not be disabled after the first connection is created.
   * @param {boolean} [options.createNodes=true] Indicates if a node should be created when pointing on an empty space.
   * @param {CursorStyle} [options.cursorStyle="cell"]
   * @param {Color} [options.strokeColor="black"]
   * @param {number} [options.strokeWidth=2]
   * @param {number} [options.dashLength=8]
   * @param {function(source: Node, target: Node): boolean} [options.condition] If specified, will only connect nodes that satisfy this condition.
   * @param {function(rawNode: RawNode):RawNode} [options.createNode] Callback called before creating a new node: allows you to change the id, data and attributes of the new node.
   * @param {function(node: Node):void} [options.onNodeCreated] If `createNodes` is set to true, a new node will be created and here you can add properties or styles to it.
   * @param {function(rawEdge: RawEdge):RawEdge} [options.createEdge] Callback called before creating a new edge: allows you to change the id, data and attributes of the new edge.
   * @param {function(edge: Edge):void} [options.onEdgeCreated] In this callback you can add properties or styles to the created edge.
   * @param {function(source:Node, target: Node, edge: Edge):void} [options.onComplete] Called when a new connection is created. Note that target and edge could be `null` in case of no edge is created.
   *
   * @example
   * ogma.connectNodes.enable({
   *   onNodeCreated: function(node) {
   *     node.setAttributes({ color: 'red' });
   *   },
   *   onEdgeCreated: function(edge) {
   *     edge.setAttributes({ width: 5 });
   *   }
   * });
   */
  enable: (options?: ConnectNodesOptions<ND, ED> | undefined) => this;
  /**
   * @method Ogma.tools.connectNodes.disable
   * Disable the "connectNodes" mode.
   *
   * @example
   * if (ogma.connectNodes.enabled()) {
   *   ogma.connectNodes.disable();
   * }
   */
  disable: () => this;
  /**
   * @method Ogma.tools.connectNodes.enabled
   * Indicates if the "connectNodes" mode is enabled.
   *
   * @example
   * if (ogma.connectNodes.enabled()) {
   *   ogma.connectNodes.disable();
   * }
   */
  enabled: () => boolean;
}

declare type RectangleSelectOptions<ND = any, ED = any> = LassoOptions<ND, ED>;

declare class RectangleSelectAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.rectangleSelect.enable
   * Enable the selection by rectangle tool, allowing the user to select some nodes by drawing a rectangle on the screen.
   * @param {object}                [options]
   * @param {Color}                 [options.strokeColor="#00C3FF"]           Rectangle stroke color
   * @param {number}                [options.strokeWidth=1]                   Rectangle stroke width
   * @param {Color|null}            [options.fillColor="rgba(0,195,255,0.1)"] Rectangle fill color
   * @param {CursorStyle}           [options.cursorStyle="cell"]              Cursor style when the rectangle is active (CSS property)
   * @param {function(evt: {nodes: NodeList, edges: EdgeList})} [options.callback] Called with the nodes/edges surrounded
   * by the rectangle. By default, add the surrounded nodes to the selection. If there is no surrounded node, add
   * the surrounded edges instead.
   * @param {boolean}               [options.bothExtremities=false] If set to `true`, edge will
   * be passed to `callback` only if both of its ends are inside the selected area.
   * By default, just one endpoint inside the selection is enough to be included.
   *
   * @example
   * ogma.tools.rectangleSelect.enable({
   *   strokeColor: 'blue',
   *   callback: function (payload) {
   *     // Override the default behavior and replaces the selection
   *     // instead of just adding the elements to the selection
   *     ogma.clearSelection();
   *     payload.nodes.setSelected(true);
   *     payload.edges.setSelected(true);
   *   })
   * });
   */
  enable: (options: RectangleSelectOptions) => void;
  /**
   * @method Ogma.tools.rectangleSelect.disable
   * Disable the rectangle selection.
   * @example
   * ogma.tools.rectangleSelect.disable();
   */
  disable: () => void;
  /**
   * @method Ogma.tools.rectangleSelect.enabled
   * Indicates if the rectangle selection is enabled.
   * @return {boolean}
   * @example
   * console.log(ogma.tools.rectangleSelect.enabled());
   */
  enabled: () => boolean;
}

interface ResizingOptions {
  cursor?: CursorStyle;
  color?: Color;
  lineWidth?: number;
  handleSize?: number;
  detectionMargin?: number;
  snappingRatio?: number;
  nbNodesToSnapTo?: number;
  previewColor?: Color;
  sizeIndicatorColor?: Color;
  sizeIndicatorOffset?: number;
  sizeIndicatorWidth?: number;
  sizeIndicatorThickness?: number;
}
declare class ResizingAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.resize.enable
   * Enable the "resize" mode, allowing the user to manually change the size of the selected nodes.
   * @param {object} [options]
   * @param {CursorStyle} [options.cursor="nesw-resize"] CSS cursor to use when the mouse is over a resizing handle
   * @param {Color} [options.color="#00C3FF"] Color used to display the nodes bounding box
   * @param {number} [options.lineWidth=1] Width (in pixels) of the stroke of the square representing the nodes bounding box
   * @param {number} [options.handleSize=6] Width (in pixels) of the square indicator to drag in order to resize the node
   * @param {number} [options.detectionMargin=5] Maximum distance (in pixels) the mouse can be to the resize handler and still be detected
   * @param {number} [options.snappingRatio=1.25] Ratio used to determine the size to snap to, when the node does not snap to another node size. Must be strictly greater than 1.
   * @param {number} [options.nbNodesToSnapTo=5] Number of close nodes to use for snapping.
   * @param {Color} [options.previewColor='rgba(0, 0, 0, 0.2)'] Color of the preview of the node being resized
   * @param {Color} [options.sizeIndicatorColor="black"] Color of the size indicator (shown when the node snaps to the size of another node)
   * @param {number} [options.sizeIndicatorOffset=5] Offset (in pixels) to the left on which the size indicator must be displayed
   * @param {number} [options.sizeIndicatorWidth=3] Total width (in pixels) of the indicator size
   * @param {number} [options.sizeIndicatorThickness=1] Thickness (in pixels) of the line used to draw the size indicator
   */
  enable: (options: ResizingOptions) => void;
  /**
   * @method Ogma.tools.resize.disable
   * Disable the "resize" mode.
   */
  disable: () => void;
  /**
   * @method Ogma.tools.resize.enabled
   * Indicates if the "resize" mode is enabled.
   * @return {boolean}
   */
  enabled: () => boolean;
}

interface RewiringOptions {
  color?: Color;
  radius?: number;
  cursorOnHover?: CursorStyle;
  cursorOnDrag?: CursorStyle;
}
declare class RewiringAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.rewire.enable
   * Enable the "rewire" tool, enabling the user to manually change the extremities of the selected edges.
   * @param {object} [options]
   * @param {Color} [options.color="#00C3FF"] Color of the handle in the center of the nodes
   * @param {number} [options.radius=7] Radius, in pixels, of the handle in the center of the nodes
   * @param {CursorStyle} [options.cursorOnHover='grab'] CSS cursor style when hovering a node handle
   * @param {CursorStyle} [options.cursorOnDrag='grabbing'] CSS cursor style when dragging an edge
   * @example
   * ogma.tools.rewiring.enable();
   */
  enable: (options: RewiringOptions) => void;
  /**
   * @method Ogma.tools.rewire.disable
   * Disable the "rewire" tool'.
   * @example
   * ogma.tools.rewiring.disable();
   */
  disable: () => void;
  /**
   * @method Ogma.tools.rewire.enabled
   * @return {boolean} Indicates if the "rewire" tool is enabled
   * @example
   * // Toggle the tool
   * ogma.tools.rewiring[ogma.tools.rewiring.enabled() ? 'enable' : 'disable']();
   */
  enabled: () => boolean;
}

interface SnappingOptions {
  enabled?: boolean;
  tolerance?: number;
  centerSnapDistance?: number;
  sideSnapDistanceFactor?: number;
  guidelineWidth?: number;
  guidelineColor?: Color;
  preferredDistance?: {
    enabled?: boolean;
    ratio?: number;
    tolerance?: number;
    lineWidth?: number;
    lineColor?: Color;
  };
  neighbours: {
    enabled?: boolean;
    lineWidth?: number;
    lineColor?: Color;
    tolerance?: number;
    offset?: number;
  };
}
declare class SnappingAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.snapping.enable
   * Enables the snapping mode while dragging the nodes.
   * @param {object}  [options]
   * @param {Boolean} [options.enabled=false]                       Indicates whether the snapping is on when the node is being dragged
   * @param {Number}  [options.tolerance=5]                         Pixel tolerance distance within which node is snapped towards the guideline
   * @param {Number}  [options.centerSnapDistance=240]              Maximum distance between 2 nodes that allowes their centers to be aligned
   * @param {Number}  [options.sideSnapDistanceFactor=3]            Maximum distance between 2 nodes that allowes their sides to be aligned. The value is the factor of dragged node diameter.
   * @param {Number}  [options.guidelineWidth=1]                    Width of the alignment guideline
   * @param {Color}   [options.guidelineColor='red']                Color of the axis-ligned guidelines
   * @param {object}  [options.preferredDistance]                   Options for preferred ditance snapping: pairwise snapping of the nodes based on their distance
   * @param {Boolean} [options.preferredDistance.enabled=true]      Enables the mode.
   * @param {Number}  [options.preferredDistance.ratio=1.13]        Preferred distance ratio between nodes `a` and `b`, according to the formula `d = (Ra + Rb) * ratio`
   * @param {Number}  [options.preferredDistance.tolerance=10]      Snapping distance
   * @param {Number}  [options.preferredDistance.lineWidth=1]       Guideline width
   * @param {Color}   [options.preferredDistance.lineColor=#00C3FF] Guideline color
   * @param {object}  [options.neighbours]                          Equal nodes distribution: snaps a node to the middle of the distance between two other nodes or to the same distance as two of its neighbours
   * @param {Boolean} [options.neighbours.enabled=true]             Enables the mode.
   * @param {Number}  [options.neighbours.lineWidth=1]              Guideline width
   * @param {Color}   [options.neighbours.lineColor=#00C3FF]        Guideline color
   * @param {Number}  [options.neighbours.tolerance=3]              Snapping distance
   * @param {Number}  [options.neighbours.offset=5]                 Distance between the guideline and common bounding box of aligned nodes
   */
  enable: (options: SnappingOptions) => void;
  /**
   * @method Ogma.tools.snapping.disable
   * Disables snapping mode in nodes dragging.
   */
  disable: () => void;
  enabled: () => boolean;
}

declare type TooltipPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'cssDefined';
/**
 * @public
 * @property {"top"|"bottom"|"left"|"right"|"cssDefined"} [options.position="top"] Position of the tooltip relative to
 * the mouse. If "cssDefined" is specified, the tooltip will only be added to the graph container without
 * positioning it.
 * @property {boolean} [options.autoAdjust=true] When the mouse is at the edge of the screen, indicates if the
 * tooltip position should be corrected so it fits in the canvas.
 * @property {number} [options.delay=0] Delay in milliseconds before the tooltip is shown when the node is hovered.
 * @property {string} [options.className] If specified, this class name will be added to tooltip.
 */
interface TooltipOptions {
  position?: TooltipPosition;
  autoAdjust?: boolean;
  delay?: number;
  className?: string;
}
declare class TooltipAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.tools.tooltip.onNodeHover
   * Indicates the tooltip to display when a node is hovered.
   * @param {function (node: Node): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   * @example
   * ogma.tools.tooltip.onNodeHover(function (node) {
   *   return '&lt;p&gt;' + node.getId() + '&lt;/p&gt;';
   * });
   */
  onNodeHover: (
    handler: (node: Node$1<ND, ED>) => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onNodeClick
   * Indicates the tooltip to display when a node is left clicked.
   * @param {function (node: Node): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onNodeClick: (
    handler: (node: Node$1<ND, ED>) => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onNodeRightClick
   * Indicates the tooltip to display when a node is right clicked.
   * @param {function (node: Node): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onNodeRightClick: (
    handler: (node: Node$1<ND, ED>) => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onNodeDoubleClick
   * Indicates the tooltip to display when a node is double clicked.
   * @param {function (node: Node): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onNodeDoubleClick: (
    handler: (node: Node$1<ND, ED>) => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onEdgeHover
   * Indicates the tooltip to display when a edge is hovered.
   * @param {function (edge: Edge): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onEdgeHover: (
    handler: (edge: Edge<ND, ED>) => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onEdgeClick
   * Indicates the tooltip to display when a edge is left clicked.
   * @param {function (edge: Edge): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onEdgeClick: (
    handler: (edge: Edge<ND, ED>) => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onEdgeRightClick
   * Indicates the tooltip to display when a edge is right clicked.
   * @param {function (edge: Edge): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onEdgeRightClick: (
    handler: (edge: Edge<ND, ED>) => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onEdgeDoubleClick
   * Indicates the tooltip to display when a edge is double clicked.
   * @param {function (edge: Edge): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onEdgeDoubleClick: (
    handler: (edge: Edge<ND, ED>) => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onBackgroundClick
   * Indicates the tooltip to display when the background is left clicked.
   * @param {function (): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onBackgroundClick: (
    handler: () => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onBackgroundRightClick
   * Indicates the tooltip to display when the background is right clicked.
   * @param {function (): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onBackgroundRightClick: (
    handler: () => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.onBackgroundDoubleClick
   * Indicates the tooltip to display when the background is double clicked.
   * @param {function (): (string|Promise<string>)} handler The function that will be called to generate the tooltip. Must return a HTML string.
   * @param {TooltipOptions} [options]
   */
  onBackgroundDoubleClick: (
    handler: () => string | Promise<string>,
    options?: TooltipOptions
  ) => void;
  /**
   * @method Ogma.tools.tooltip.refresh
   * Refresh the current tooltip.
   */
  refresh: () => void;
  /**
   * @method Ogma.tools.tooltip.isShown
   * Indicates if a tooltip is currently displayed.
   * @return {boolean}
   */
  isShown: () => boolean;
  /**
   * @method Ogma.tools.tooltip.hide
   * Hide the tooltip that is currently being displayed.
   */
  hide: () => void;
}

declare class ToolsAPI<ND, ED> extends APIModule<ND, ED> {
  /** @inner */
  lasso: LassoAPI<ND, ED>;
  /** @inner */
  connectNodes: ConnectNodesAPI<ND, ED>;
  /** @inner */
  legend: LegendAPI<ND, ED>;
  /** @inner */
  rectangleSelect: RectangleSelectAPI<ND, ED>;
  /** @inner */
  resize: ResizingAPI<ND, ED>;
  /** @inner */
  rewire: RewiringAPI<ND, ED>;
  /** @inner */
  snapping: SnappingAPI<ND, ED>;
  /** @inner */
  tooltip: TooltipAPI<ND, ED>;
  /** @inner */
  brand: BrandAPI<ND, ED>;
}

interface TransformationOptions {
  duration?: number;
  enabled?: boolean;
}

declare type NodeGroupIdGenerator<ND, ED> = (node: Node$1<ND, ED>) => string;
declare type EdgeGroupIdGenerator<ED, ND> = (edge: Edge<ED, ND>) => string;
declare type NodeGroupGenerator<ND, ED> = (
  nodes: NodeList<ND, ED>,
  groupId: string,
  transformation: Transformation<ND, ED>
) => NodeDataAndAttributes;
declare type EdgeGroupGenerator<ED, ND> = (
  edges: EdgeList<ED, ND>,
  groupId: string,
  transformation: Transformation<ND, ED>
) => EdgeDataAndAttributes;
/**
 * @public
 *
 * @property {NodeId} [id]
 * @property {any} [data]
 * @property {NodeAttributes} [attributes]
 */
interface NodeDataAndAttributes {
  id?: NodeId;
  data?: any;
  attributes?: NodeAttributes;
}
/**
 * @public
 * @property {EdgeId} [id]
 * @property {any} [data]
 * @property {EdgeAttributes} [attributes]
 */
interface EdgeDataAndAttributes {
  id?: EdgeId;
  data?: any;
  attributes?: EdgeAttributes;
}
interface NodeGroupingOptions<ND, ED> extends TransformationOptions {
  selector?: NodeSelector<ND, ED>;
  groupIdFunction?: NodeGroupIdGenerator<ND, ED>;
  nodeGenerator?: NodeGroupGenerator<ND, ED>;
  edgeGenerator?: EdgeGroupGenerator<ED, ND>;
  groupEdges?: boolean;
  padding?: number | ((node: Node$1<ND, ED>) => number);
  separateEdgesByDirection?: boolean;
  groupSelfLoopEdges?: boolean;
  restorePositions?: boolean;
  showContents?: ((metaNode: Node$1<ND, ED>) => boolean) | boolean;
  onCreated?: (
    metaNode: Node$1<ND, ED>,
    showContent: boolean,
    nodes: NodeList<ND, ED>,
    edges: EdgeList<ED, ND>
  ) => Promise<void>;
}
interface GeoClusteringOptions<ND, ED> extends NodeGroupingOptions<ND, ED> {
  radius?: number;
}
interface EdgeGroupingOptions<ED, ND> extends TransformationOptions {
  selector?: EdgeSelector<ED, ND>;
  groupIdFunction?: EdgeGroupIdGenerator<ED, ND>;
  generator?: EdgeGroupGenerator<ED, ND>;
  separateEdgesByDirection?: boolean;
  duration?: number;
}

declare type NodeFilterCriterion<ND, ED> = NodeSelector<ND, ED>;
interface NodeFilterOptions<ND, ED> extends TransformationOptions {
  criteria: NodeFilterCriterion<ND, ED>;
}
declare type EdgeFilterCriterion<ED, ND> = EdgeSelector<ED, ND>;
interface EdgeFilterOptions<ED, ND> extends TransformationOptions {
  criteria: EdgeFilterCriterion<ED, ND>;
}

interface NeighborMergingOptions<ND, ED> extends TransformationOptions {
  selector?: NodeSelector<ND, ED>;
  dataFunction: (node: Node$1<ND, ED>) => object | undefined;
}
interface NeighborGenerationOptions<ND, ED> extends TransformationOptions {
  selector?: NodeSelector<ND, ED>;
  neighborIdFunction: (node: Node$1<ND, ED>) => string | string[] | null;
  nodeGenerator?: (identifier: string, nodes: NodeList<ND, ED>) => RawNode<ND>;
  edgeGenerator?: (
    originalNode: Node$1<ND, ED>,
    generatedNode: Node$1<ND, ED>
  ) => RawEdge<ED>;
}

declare type EdgeGenerator<ED, ND> = (
  hiddenNode: Node$1<ND, ED>,
  node1: Node$1<ND, ED>,
  node2: Node$1<ND, ED>,
  edges1: EdgeList<ED, ND>,
  edges2: EdgeList<ED, ND>
) => Partial<RawEdge> | null;
interface NodeCollapsingOptions<ND, ED> extends TransformationOptions {
  selector?: NodeSelector<ND, ED>;
  edgeGenerator?: EdgeGenerator<ED, ND>;
}

declare type NodeDataFunction<ND, ED> = (node: Node$1<ND, ED>) => object;
declare type EdgeDataFunction<ED, ND> = (node: Edge<ED, ND>) => object;

interface VirtualPropertiesOptions<ND, ED> extends TransformationOptions {
  nodeSelector?: NodeSelector<ND, ED>;
  nodeDataFunction?: NodeDataFunction<ND, ED>;
  edgeSelector?: EdgeSelector<ED, ND>;
  edgeDataFunction?: EdgeDataFunction<ED, ND>;
}

declare type RawNodeSelector<ND> = (node: RawNode<ND>) => boolean;
declare type RawNodeGroupFunction<ND> = (node: RawNode<ND>) => string;
declare type RawNodeGroupGenerator<ND, ED> = (
  nodes: RawNode<ND>[],
  groupId: string,
  transformation: Transformation<ND, ED>
) => NodeDataAndAttributes;
declare type RawEdgeGenerator<ND, ED> = (
  edges: RawEdge<ED>[],
  groupId: string,
  transformation: Transformation<ND, ED>
) => EdgeDataAndAttributes;
interface NodeClusteringOptions<ND, ED> extends TransformationOptions {
  selector?: RawNodeSelector<ND>;
  groupIdFunction?: RawNodeGroupFunction<ND>;
  nodeGenerator?: RawNodeGroupGenerator<ND, ED>;
  edgeGenerator?: RawEdgeGenerator<ND, ED>;
  groupSelfLoopEdges?: boolean;
}

/**
 * @extends Options
 * @property {object}   [transformations]
 * @property {boolean}  [transformations.updateOnDataChange=true] Indicates if the transformations should be re-computed when the data of a node or edge changes.
 */
/**
 * @namespace Ogma.transformations
 *
 * Transformations allow to change the structure of the graph based on rules.
 * For example, a grouping transformation can group together nodes that share
 * the same `country` data property: nodes that compose the groups are virtually
 * removed from the graph (they can still be manipulated via the API but are not
 * visible anymore) and new nodes, which represent the groups, are added to the
 * graph. These new nodes can be manipulated like regular nodes but cannot be
 * removed. Nodes and edges that are created this way are called "virtual".
 *
 * There are currently two types of transformations: groups and filters. Filters
 * hide nodes/edges based on a criteria.
 *
 * Multiple transformations can be applied at once, in which case they are
 * applied one after another. For example you can filter, group and then filter
 * again based on the result of the grouping.
 *
 * Transformations are automatically updated in the following cases:
 *
 * - a transformation is added/removed/enabled/disabled
 * - a node/edge is added/removed
 * - the data of a node/edge changes (only if the option
 * `transformation.updateOnDataChange` is `true`)
 *
 * When transformations are updated, all transformations are undone and then run
 * again. Transformation updates are batched, making sure multiple events that
 * trigger an update will only result in one single update.
 */
declare class TransformationAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.transformations.addNodeGrouping
   */
  addNodeGrouping: (
    options?: NodeGroupingOptions<ND, ED>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.addNodeClustering
   */
  addNodeClustering: (
    options?: NodeClusteringOptions<ND, ED>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.addEdgeGrouping
   */
  addEdgeGrouping: (
    options?: EdgeGroupingOptions<ED, ND>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.addNodeFilter
   */
  addNodeFilter: (
    options: NodeSelector<ND, ED> | NodeFilterOptions<ND, ED>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.addEdgeFilter
   */
  addEdgeFilter: (
    options: EdgeSelector<ED, ND> | EdgeFilterOptions<ED, ND>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.getNodeFilters
   */
  getNodeFilters: () => Transformation<ND, ED>[];
  /**
   * @method Ogma.transformations.getEdgeFilters
   */
  getEdgeFilters: () => Transformation<ND, ED>[];
  /**
   * @method Ogma.transformations.addNeighborGeneration
   */
  addNeighborGeneration: (
    options: NeighborGenerationOptions<ND, ED>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.addNeighborMerging
   */
  addNeighborMerging: (
    options: NeighborMergingOptions<ND, ED>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.addNodeCollapsing
   */
  addNodeCollapsing: (
    options?: NodeCollapsingOptions<ND, ED>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.addGeoClustering
   */
  addGeoClustering: (
    options?: GeoClusteringOptions<ND, ED>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.addVirtualProperties
   */
  addVirtualProperties: (
    options: VirtualPropertiesOptions<ND, ED>
  ) => Transformation<ND, ED>;
  /**
   * @method Ogma.transformations.getList
   * Returns the list of transformations applied to the graph.
   * @returns {Array<Transformation>}
   */
  getList: () => Transformation<ND, ED>[];
  /**
   * @method Ogma.transformations.clear
   * Clear all transformations.
   * @returns {Promise<void>}
   */
  clear: () => Promise<void>;
  /**
   * @method Ogma.transformations.afterNextUpdate
   * Returns a Promise that resolves after the next time the transformations are updated
   * @returns {Promise<void>}
   * @example
   * // Add a filter
   * ogma.transformations.addNodeFilter(node => node.getData('country') === 'USA');
   *
   * // Adding a node will trigger the refresh of transformations
   * ogma.addNode({id: 'foo', data: {country: 'Brazil'}});
   *
   * ogma.transformations.afterNextUpdate().then(() => {
   *   // The transformations have been re-applied, the added node is now hidden
   * });
   */
  afterNextUpdate: () => Promise<void>;
}

/**
 * @public
 */
declare type DrawingFunction = (ctx: CanvasRenderingContext2D) => void;
/**
 * @public
 * @property {boolean} [isStatic=false] Is the canvas sync with the view ?
 * @property {boolean} [noClear=false] No clearing is executed before each draw call.
 */
declare type CanvasLayerOptions = {
  isStatic: boolean;
  noClear: boolean;
  canvas?: HTMLCanvasElement;
  ctx?: CanvasRenderingContext2D;
};
/**
 * @public
 * @property {HTMLElement|string} element HTML element being transformed. You can also provide an HTML string.
 * @property {{x: number, y: number}} position The element translation in the graph space.
 * @property {{width: number, height: number}} size The element size in the graph space.
 */
declare type OverlayOptions = {
  element: HTMLElement | string;
  position: Point;
  size: Size;
  scaled?: boolean;
};
/**
 * @public
 * descript;
 * @property {HTMLElement} element HTML element used by the layer.
 * @property {() => number} getLevel Retrieves the index of the layer in the layer array.
 * @property {(depth: number) => Layer} moveTo Move the layer to the specified index in the layer array.
 * @property {() => Layer} moveUp Take the layer up a notch (increases its index by 1).
 * @property {() => Layer} moveDown Take the layer down a notch (decreases its index by 1).
 * @property {() => Layer} moveToTop Move the layer at the very top of the array (index `length - 1`).
 * @property {() => Layer} moveToBottom Move the layer at the very bottom of the array (index `0`).
 * @property {() => Layer} destroy Destroy the layer (remove it from the layer array, remove its listeners).
 * @property {() => Layer} hide Keep the layer in the layer array but hide its content.
 * @property {() => Layer} show Show the layer content.
 * @property {() => boolean} isHidden Check the layer visibility.
 * @property {(opacity: number) => Layer} setOpacity Set the layer opacity.
 * @property {() => number} getOpacity Get the layer opacity, between 0 and 1.
 * @property {(size: {width: number, height: number}) => Layer} setSize Setter setting the element size in the graph space.
 * @property {(position: {x: number, y: number}) => Layer} setPosition Setter setting the element translation in the graph space.
 */
interface Layer {
  element: HTMLElement;
  getLevel: () => number;
  moveTo: (depth: number) => this;
  moveUp: () => this;
  moveDown: () => this;
  moveToTop: () => this;
  moveToBottom: () => this;
  destroy: () => this;
  hide: () => this;
  show: () => this;
  isHidden: () => boolean;
  setOpacity: (opacity: number) => this;
  getOpacity: () => number;
  setPosition: (position: Point) => this;
  setSize: (size: Size) => this;
  _onViewChange?: () => void;
  _onDestroy?: () => void;
}
/**
 * @public
 * @property {HTMLElement} element HTML element used by the layer.
 * @property {() => number} getLevel Retrieves the index of the layer in the layer array.
 * @property {(depth: number) => CanvasLayer} moveTo Move the layer to the specified index in the layer array.
 * @property {() => CanvasLayer} moveUp Take the layer up a notch (increases its index by 1).
 * @property {() => CanvasLayer} moveDown Take the layer down a notch (decreases its index by 1).
 * @property {() => CanvasLayer} moveToTop Move the layer at the very top of the array (index `length - 1`).
 * @property {() => CanvasLayer} moveToBottom Move the layer at the very bottom of the array (index `0`).
 * @property {() => CanvasLayer} destroy Destroy the layer (remove it from the layer array, remove its listeners).
 * @property {() => CanvasLayer} hide Keep the layer in the layer array but hide its content.
 * @property {() => CanvasLayer} show Show the layer content.
 * @property {() => boolean} isHidden Check the layer visibility.
 * @property {(opacity: number) => CanvasLayer} setOpacity Set the layer opacity.
 * @property {() => number} getOpacity Get the layer opacity, between 0 and 1.
 * @property {() => CanvasLayer} refresh Function rerendering the canvas.
 */
interface CanvasLayer extends Layer {
  refresh: (optionalDraw?: (ctx: CanvasRenderingContext2D) => void) => void;
  clear: () => void;
}
/**
 * @public
 * @property {HTMLElement} element HTML element used by the layer.
 * @property {() => number} getLevel Retrieves the index of the layer in the layer array.
 * @property {(depth: number) => Overlay} moveTo Move the layer to the specified index in the layer array.
 * @property {() => Overlay} moveUp Take the layer up a notch (increases its index by 1).
 * @property {() => Overlay} moveDown Take the layer down a notch (decreases its index by 1).
 * @property {() => Overlay} moveToTop Move the layer at the very top of the array (index `length - 1`).
 * @property {() => Overlay} moveToBottom Move the layer at the very bottom of the array (index `0`).
 * @property {() => Overlay} destroy Destroy the layer (remove it from the layer array, remove its listeners).
 * @property {() => Overlay} hide Keep the layer in the layer array but hide its content.
 * @property {() => Overlay} show Show the layer content.
 * @property {() => boolean} isHidden Check the layer visibility.
 * @property {(opacity: number) => Overlay} setOpacity Set the layer opacity.
 * @property {() => number} getOpacity Get the layer opacity, between 0 and 1.
 * @property {(size: {width: number, height: number}) => Overlay} setSize Setter setting the element size in the graph space.
 * @property {(position: {x: number, y: number}) => Overlay} setPosition Setter setting the element translation in the graph space.
 */
interface Overlay extends Layer {
  setSize: (size: Size) => this;
  setPosition: (position: Point) => this;
}

declare class LayersAPI<ND, ED> extends APIModule<ND, ED> {
  /**
   * @method Ogma.layers.addLayer
   * Add an HTML element as an overlay to Ogma at the specifided index (if provided).
   * This is the most basic way of adding your custom HTML elements to the
   * Ogma canvas, they will be positioned at a coordinate (in graph space) and
   * kept in sync with the camera movement, but <u>not scaled</u>.
   * @param {HTMLElement | string} element The HTML element attached to the layer. Can be an HTML string.
   * @param {number} [index] The optional index of the layer.
   * @return {Layer} Returns the layer object.
   */
  addLayer(element: HTMLElement | string, index?: number): Layer;
  /**
   * @method Ogma.layers.addCanvasLayer
   * Add a canvas layer. Useful to perform drawings in sync with the view. In the
   * drawing function you are given the CanvasRenderingContext2D, that is
   * automatically scaled and translated to be in sync with the graph. So you
   * can simply use graph coordinates to draw shapes and text in it.
   * See our "Layers" examples for the code snippets.
   * @param {DrawingFunction} draw The function drawing on the canvas in
   * the graph space.
   * @param {number} [index] The optional index of the layer.
   * @param {CanvasLayerOptions} [options] The optional layer options
   * @return {CanvasLayer} Returns the canvas layer object.
   */
  addCanvasLayer(
    render: DrawingFunction,
    options?: CanvasLayerOptions,
    index?: number
  ): CanvasLayer;
  /**
   * @method Ogma.layers.addOverlay
   * Adds an overlay layer to Ogma, that will update its position and scale in
   * sync with the graph. Ideal for images or complex annotations of the nodes.
   * @param {OverlayOptions} options HTML element
   * provided with its affine transformation in the graph space.
   * @param {number} [index] The optional index of the layer.
   * @return {Overlay} Returns the layer object.
   */
  addOverlay(options: OverlayOptions, index?: number): Overlay;
}

/**
 * Checks if a point (px, py) is inside a line ((x1, y1), (x2, y2)).
 * @method geometry.lines.isPointInLine
 * @param {number} px
 * @param {number} py
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} width Width of the line
 * @param {number} margin
 * @param {boolean} isTriangle
 * @returns {boolean}
 */
declare function isPointInLine(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  width: number,
  margin?: number,
  isTriangle?: boolean
): boolean;
/**
 * Indicates if two segments intersect.
 * @method geometry.lines.twoSegmentsIntersect
 * @param {Point} p1  First extremity of the first segment
 * @param {Point} p2  Second extremity of the first segment
 * @param {Point} p3  First extremity of the second segment
 * @param {Point} p4  Second extremity of the second segment
 * @param {boolean} [excludeBoundaries=false] If true, the segment will not be considered as
 *                                            intersecting if the intersection point is one
 *                                            of their extremities
 * @returns {boolean}
 */
declare function twoSegmentsIntersect(
  p1: Point,
  p2: Point,
  p3: Point,
  p4: Point,
  excludeBoundaries?: boolean
): boolean;
/**
 * Compute the angle formed by the line joining two points (x1, y1) and (x2, y2)
 * @returns {number}
 */
declare function lineAngle(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;
declare function angle(p1: Point, p2: Point, p3: Point): number;
/**
 * Intersection between two lines (unbounded)
 * http://jsfiddle.net/justin_c_rounds/Gd2S2/
 *
 * @method geometry.lines.lineIntersection
 * @param  {number} ax0  The X coordinate of the start point of the first line.
 * @param  {number} ay0  The Y coordinate of the start point of the first line.
 * @param  {number} ax1  The X coordinate of the end point of the first line.
 * @param  {number} ay1  The Y coordinate of the end point of the first line.v
 * @param  {number} bx0  The X coordinate of the start point of the second line.
 * @param  {number} by0  The Y coordinate of the start point of the second line.
 * @param  {number} bx1  The X coordinate of the end point of the second line.
 * @param  {number} by1  The Y coordinate of the end point of the second line.
 */
declare function lineIntersection(
  ax0: number,
  ay0: number,
  ax1: number,
  ay1: number,
  bx0: number,
  by0: number,
  bx1: number,
  by1: number
): Point | null;
/**
 * Intersection between two segments
 * http://jsfiddle.net/justin_c_rounds/Gd2S2/
 *
 * @method geometry.lines.segmentIntersection
 * @param  {number} ax0  The X coordinate of the start point of the first line.
 * @param  {number} ay0  The Y coordinate of the start point of the first line.
 * @param  {number} ax1  The X coordinate of the end point of the first line.
 * @param  {number} ay1  The Y coordinate of the end point of the first line.v
 * @param  {number} bx0  The X coordinate of the start point of the second line.
 * @param  {number} by0  The Y coordinate of the start point of the second line.
 * @param  {number} bx1  The X coordinate of the end point of the second line.
 * @param  {number} by1  The Y coordinate of the end point of the second line.
 */
declare function segmentIntersection(
  ax0: number,
  ay0: number,
  ax1: number,
  ay1: number,
  bx0: number,
  by0: number,
  bx1: number,
  by1: number
): Point | null;
/**
 * I thought about using Liang-Barsky algorithm there, but it's
 * the same - difficult to decide, whether the clipping occured
 * or not and which intersection point was the closest to either
 * endpoints of the line
 *            *
 *     B ----- C
 *     |*      |
 *    *|       |
 *  *  A ----- D
 *
 * @method geometry.lines.segmentRectangleIntersection
 * @param  {Number} ax
 * @param  {Number} ay
 * @param  {Number} bx
 * @param  {Number} by
 * @param  {Number} minX
 * @param  {Number} minY
 * @param  {Number} maxX
 * @param  {Number} maxY
 * @return {Array<Point>}
 */
declare function segmentRectangleIntersection(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  minX: number,
  minY: number,
  maxX: number,
  maxY: number
): Point[];
/**
 * Whether 2 line segments intersect
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {number} x3
 * @param  {number} y3
 * @param  {number} x4
 * @param  {number} y4
 * @return {boolean}
 */
declare function lineLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
): boolean;
/**
 * Fast line - AABB intersection, returns boolean
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @param  {number} rx1
 * @param  {number} ry1
 * @param  {number} rx2
 * @param  {number} ry2
 * @return {boolean}
 */
declare function lineAABB(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  rx1: number,
  ry1: number,
  rx2: number,
  ry2: number
): boolean;
declare function distancePointSegment(p: any, v: any, w: any): number;
declare function distToSegmentSquared(
  px: number,
  py: number,
  vx: number,
  vy: number,
  wx: number,
  wy: number
): number;
declare function getClosestPointOnSegment(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number
): Point;
declare function getClosestPointOnLine(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number
): Point;

/**
 * Axis-aligned bbox
 */
declare type AABB = [number, number, number, number];
declare const defaultAABB: AABB;
/** Oriented bounding box: x, y, w, h, angle */
declare type OBB = [number, number, number, number, number];
/**
 * Rotate a point (px, py) around a rotation center (cx, cy) and give the new position.
 * @memberOf Geometry
 * @param {number} px
 * @param {number} py
 * @param {number} cx
 * @param {number} cy
 * @param {number} angle Angle of the rotation (in radians)
 * @param {object} [dest] If specified, modifies this object instead of allocating a new one.
 * @returns {{x: number, y: number}}
 */
declare function rotate(
  px: number,
  py: number,
  cx: number,
  cy: number,
  angle: number,
  dest?: Point
): Point;
/**
 * Move point by a distance and angle
 * @param  {Point} point
 * @param  {Number} angle
 * @param  {Number} [dist=0]
 * @param  {Point} [dest]
 * @return {Point}
 */
declare function move(
  point: Point,
  angle: number,
  dist?: number,
  dest?: Point
): Point;
/**
 * Compute the distance between two points (x1, y1) and (x2, y2).
 * @method geometry.distance
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number} Distance between the two points.
 */
declare function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;
/**
 * Squared distance between the points - performance trick
 * for analytical usage
 *
 * @param  {number} x1
 * @param  {number} y1
 * @param  {number} x2
 * @param  {number} y2
 * @return {number}
 */
declare function squaredDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;
declare function normalize(v: Point): Point;
declare function radiansToDegrees(radians: number): number;
declare function degreesToRadians(degrees: number): number;
declare function extendBounds(
  bounds: SimpleBoundingBox,
  padding: number
): SimpleBoundingBox;

/**
 * Check if a point (px, py) is inside a polygon.
 * @memberOf Geometry
 * @param {number} px
 * @param {number} py
 * @param {Array.<Point>} points Ordered list of point of the polygon.
 * @param {number} numPoints
 * @returns {boolean}
 */
declare function isPointInPolygon(
  px: number,
  py: number,
  points: Point[]
): boolean;
declare function polygonsIntersect(v1: Point[], v2: Point[]): boolean;
/**
 * @method geometry.computeCentroid
 * Returns the average of the specified points
 * @param {Array<{x: number, y: number}>} points
 * @returns {{x: number, y: number}}
 */
declare function computeCentroid(points: Point[]): Point;

declare type ControlPoint = Point;
declare type QuadControlPoint = ControlPoint;
interface CubicControlPoint {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
/**
 * Compute the control point of a non-loop curved edge.
 */
declare function getQuadraticCurveControlPoint(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  curvature: number,
  dest?: QuadControlPoint
): QuadControlPoint;
/**
 * Compute the controls points of a self-loop curved edge.
 */
declare function getSelfLoopControlPoints(
  x: number,
  y: number,
  curvature: number,
  sourceRadius: number,
  viewAngle: number,
  dest?: CubicControlPoint
): CubicControlPoint;

/**
 * Compute the coordinates of the point positioned at length t in the quadratic bezier curve.
 *
 * @param  {number} t  In [0,1] the step percentage to reach
 *                     the point in the curve from the context point.
 * @param  {number} x1 The X coordinate of the context point.
 * @param  {number} y1 The Y coordinate of the context point.
 * @param  {number} x2 The X coordinate of the ending point.
 * @param  {number} y2 The Y coordinate of the ending point.
 * @param  {number} xi The X coordinate of the control point.
 * @param  {number} yi The Y coordinate of the control point.
 * @param {object} [dest] If specified, this object will be modified instead of allocating a new one.
 * @return {object}
 */
declare function getPointOnQuadraticCurve(
  t: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  xi: number,
  yi: number,
  dest?: Point
): Point;
/**
 * Compute the tangent of the point positioned at length t in the quadratic bezier curve.
 *
 * @param  {number} t  In [0,1] the step percentage to reach
 *                     the point in the curve from the context point.
 * @param  {number} x1 The X coordinate of the context point.
 * @param  {number} y1 The Y coordinate of the context point.
 * @param  {number} x2 The X coordinate of the ending point.
 * @param  {number} y2 The Y coordinate of the ending point.
 * @param  {number} xi The X coordinate of the control point.
 * @param  {number} yi The Y coordinate of the control point.
 * @param {object} [dest] If specified, this object will be modified instead of allocating a new one.
 * @return {object}
 */
declare function getTangentOnQuadraticCurve(
  t: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  xi: number,
  yi: number,
  dest?: Point
): Point;
/**
 * Compute the normal of the point positioned at length t in the quadratic bezier curve.
 *
 * @param  {number} t  In [0,1] the step percentage to reach
 *                     the point in the curve from the context point.
 * @param  {number} x1 The X coordinate of the context point.
 * @param  {number} y1 The Y coordinate of the context point.
 * @param  {number} x2 The X coordinate of the ending point.
 * @param  {number} y2 The Y coordinate of the ending point.
 * @param  {number} xi The X coordinate of the control point.
 * @param  {number} yi The Y coordinate of the control point.
 * @param {object} [dest] If specified, this object will be modified instead of allocating a new one.
 * @return {object}
 */
declare function getNormalOnQuadraticCurve(
  t: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  xi: number,
  yi: number,
  dest?: Point
): Point;
/**
 * Check if a point is on a quadratic bezier curve segment with a thickness.
 *
 * @param  {number} px          The X coordinate of the point to check.
 * @param  {number} py          The Y coordinate of the point to check.
 * @param  {number} x1          The X coordinate of the curve start point.
 * @param  {number} y1          The Y coordinate of the curve start point.
 * @param  {number} x2          The X coordinate of the curve end point.
 * @param  {number} y2          The Y coordinate of the curve end point.
 * @param  {number} xi          The X coordinate of the curve control point.
 * @param  {number} yi          The Y coordinate of the curve control point.
 * @param  {number} width       Width of the curve.
 * @param  {number} margin
 * @param  {boolean} isTriangle Indicates if the width of the curves decreases over time
 * @return {boolean}            True if (px, py) is on the curve segment, false otherwise.
 */
declare function isPointOnQuadraticCurve(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  xi: number,
  yi: number,
  width: number,
  margin?: number,
  isTriangle?: boolean
): boolean;
/**
 * @public
 * Returns the point of the edge at t.
 * Returns the source of the edge for t = 0 and at the target for t = 1
 * @method geometry.getPointOnEdge
 * @param  {Edge} edge          An edge
 * @param  {number} t           The interpolation value bounded in [0;1].
 * @return {object} {x,y} The position on the edge at t
 *
 * @example
 * const edge = ogma.getEdges().get(0);
 * // get the point on the middle of edge
 * const { x ,y } = Ogma.geometry.getPointOnEdge(edge, 0.5);
 */
declare function getPointOnEdge(edge: Edge, t: number): Point;
/**
 * @public
 *
 * Returns the normal vector of the edge at t.
 *
 * Returns the normal at the source of the edge for t = 0 and at the target for t = 1
 *
 * @method geometry.getNormalOnEdge
 *
 * @param  {Edge} edge          An edge
 * @param  {number} t           The interpolation value bounded in [0;1].
 * @return {object} {x,y} The normal to the edge at t
 * @example
 * const edge = ogma.getEdges().get(0);
 * // get the normal at the source of the edge
 * const { x ,y } = Ogma.geometry.getNormalOnEdge(edge, 0);
 */
declare function getNormalOnEdge(edge: Edge, t: number): Point;
/**
 * @public
 * Returns the tangent vector of the edge at t.
 * Returns the tangent at the source of the edge for t = 0 and at the target for t = 1
 * @method geometry.getTangentOnEdge
 * @param  {Edge} edge          An edge
 * @param  {number} t           The interpolation value bounded in [0;1].
 * @return {object} {x,y} The tangent to the edge at t
 *
 * @example
 * const edge = ogma.getEdges().get(0);
 * // get the tangent at the target of the edge
 * const { x ,y } = Ogma.geometry.getTangentOnEdge(edge, 1);
 */
declare function getTangentOnEdge(edge: Edge, t: number): Point;
/**
 * Compute the coordinates of the point positioned
 * at length t in the cubic bezier curve.
 *
 * @param  {number} t  In [0,1] the step percentage to reach
 *                     the point in the curve from the context point.
 * @param  {number} x1 The X coordinate of the context point.
 * @param  {number} y1 The Y coordinate of the context point.
 * @param  {number} x2 The X coordinate of the end point.
 * @param  {number} y2 The Y coordinate of the end point.
 * @param  {number} cx The X coordinate of the first control point.
 * @param  {number} cy The Y coordinate of the first control point.
 * @param  {number} dx The X coordinate of the second control point.
 * @param  {number} dy The Y coordinate of the second control point.
 * @param  {object} [dest] If specified, this object will be modified instead of allocating a new one.
 * @return {object} {x,y} The point at t.
 */
declare function getPointOnBezierCurve(
  t: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  cx: number,
  cy: number,
  dx: number,
  dy: number,
  dest?: Point
): Point;

/**
 * Get bounds for a rotated axis aligned bounding box
 * @param {number} x0    left bottom X
 * @param {number} y0    left bottom Y
 * @param {number} w     Bounds width
 * @param {number} h     Bounds height
 * @param {number} angle Rotation angle
 * @param {number} [sin] Angle sinus. If not passed, will be calculated.
 * @param {number} [cos] Angle cosinus. If not passed, will be calculated.
 */
declare function getAABB(
  x0: number,
  y0: number,
  w: number,
  h: number,
  angle?: number,
  sin?: number,
  cos?: number,
  dest?: AABB
): AABB;
/**
 * Get points for a rotated axis aligned bounding box
 * @param {number} x0    left bottom X
 * @param {number} y0    left bottom Y
 * @param {number} w     Bounds width
 * @param {number} h     Bounds height
 * @param {number} angle Rotation angle
 */
declare function getOBBPoints(
  x0: number,
  y0: number,
  w: number,
  h: number,
  angle?: number
): [Point, Point, Point, Point];
/**
 * @param  {AABB} aabb
 * @param  {Number} angle
 * @param  {Number} dist
 * @param  {Array}  dest
 * @return {AABB}
 */
declare function moveAABB(
  aabb: AABB,
  angle?: number,
  dist?: number,
  dest?: AABB
): AABB;
declare function padBounds(
  bounds: SimpleBoundingBox,
  padding: number
): SimpleBoundingBox;
/**
 * Bounds overlap
 * @param  {Array<number>} a
 * @param  {Array<number>} b
 * @return {boolean}
 */
declare function overlapsAABB(a: AABB, b: AABB): boolean;
declare function intersects(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): boolean;
declare function overlaps(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): boolean;

/**
 *
 * @public
 * @class {object} geometry
 * Ogma static toolbox for geometry purposes
 */

declare const geometry_isPointInLine: typeof isPointInLine;
declare const geometry_twoSegmentsIntersect: typeof twoSegmentsIntersect;
declare const geometry_lineAngle: typeof lineAngle;
declare const geometry_angle: typeof angle;
declare const geometry_lineIntersection: typeof lineIntersection;
declare const geometry_segmentIntersection: typeof segmentIntersection;
declare const geometry_segmentRectangleIntersection: typeof segmentRectangleIntersection;
declare const geometry_lineLine: typeof lineLine;
declare const geometry_lineAABB: typeof lineAABB;
declare const geometry_distancePointSegment: typeof distancePointSegment;
declare const geometry_distToSegmentSquared: typeof distToSegmentSquared;
declare const geometry_getClosestPointOnSegment: typeof getClosestPointOnSegment;
declare const geometry_getClosestPointOnLine: typeof getClosestPointOnLine;
type geometry_AABB = AABB;
declare const geometry_defaultAABB: typeof defaultAABB;
type geometry_OBB = OBB;
declare const geometry_rotate: typeof rotate;
declare const geometry_move: typeof move;
declare const geometry_distance: typeof distance;
declare const geometry_squaredDistance: typeof squaredDistance;
declare const geometry_normalize: typeof normalize;
declare const geometry_radiansToDegrees: typeof radiansToDegrees;
declare const geometry_degreesToRadians: typeof degreesToRadians;
declare const geometry_extendBounds: typeof extendBounds;
declare const geometry_isPointInPolygon: typeof isPointInPolygon;
declare const geometry_polygonsIntersect: typeof polygonsIntersect;
declare const geometry_computeCentroid: typeof computeCentroid;
declare const geometry_getSelfLoopControlPoints: typeof getSelfLoopControlPoints;
declare const geometry_getQuadraticCurveControlPoint: typeof getQuadraticCurveControlPoint;
declare const geometry_getPointOnQuadraticCurve: typeof getPointOnQuadraticCurve;
declare const geometry_getTangentOnQuadraticCurve: typeof getTangentOnQuadraticCurve;
declare const geometry_getNormalOnQuadraticCurve: typeof getNormalOnQuadraticCurve;
declare const geometry_isPointOnQuadraticCurve: typeof isPointOnQuadraticCurve;
declare const geometry_getPointOnEdge: typeof getPointOnEdge;
declare const geometry_getNormalOnEdge: typeof getNormalOnEdge;
declare const geometry_getTangentOnEdge: typeof getTangentOnEdge;
declare const geometry_getPointOnBezierCurve: typeof getPointOnBezierCurve;
declare const geometry_getAABB: typeof getAABB;
declare const geometry_getOBBPoints: typeof getOBBPoints;
declare const geometry_moveAABB: typeof moveAABB;
declare const geometry_padBounds: typeof padBounds;
declare const geometry_overlapsAABB: typeof overlapsAABB;
declare const geometry_intersects: typeof intersects;
declare const geometry_overlaps: typeof overlaps;
declare namespace geometry {
  export {
    geometry_isPointInLine as isPointInLine,
    geometry_twoSegmentsIntersect as twoSegmentsIntersect,
    geometry_lineAngle as lineAngle,
    geometry_angle as angle,
    geometry_lineIntersection as lineIntersection,
    geometry_segmentIntersection as segmentIntersection,
    geometry_segmentRectangleIntersection as segmentRectangleIntersection,
    geometry_lineLine as lineLine,
    geometry_lineAABB as lineAABB,
    geometry_distancePointSegment as distancePointSegment,
    geometry_distToSegmentSquared as distToSegmentSquared,
    geometry_getClosestPointOnSegment as getClosestPointOnSegment,
    geometry_getClosestPointOnLine as getClosestPointOnLine,
    geometry_AABB as AABB,
    geometry_defaultAABB as defaultAABB,
    geometry_OBB as OBB,
    geometry_rotate as rotate,
    geometry_move as move,
    geometry_distance as distance,
    geometry_squaredDistance as squaredDistance,
    geometry_normalize as normalize,
    geometry_radiansToDegrees as radiansToDegrees,
    geometry_degreesToRadians as degreesToRadians,
    geometry_extendBounds as extendBounds,
    geometry_isPointInPolygon as isPointInPolygon,
    geometry_polygonsIntersect as polygonsIntersect,
    geometry_computeCentroid as computeCentroid,
    geometry_getSelfLoopControlPoints as getSelfLoopControlPoints,
    geometry_getQuadraticCurveControlPoint as getQuadraticCurveControlPoint,
    geometry_getPointOnQuadraticCurve as getPointOnQuadraticCurve,
    geometry_getTangentOnQuadraticCurve as getTangentOnQuadraticCurve,
    geometry_getNormalOnQuadraticCurve as getNormalOnQuadraticCurve,
    geometry_isPointOnQuadraticCurve as isPointOnQuadraticCurve,
    geometry_getPointOnEdge as getPointOnEdge,
    geometry_getNormalOnEdge as getNormalOnEdge,
    geometry_getTangentOnEdge as getTangentOnEdge,
    geometry_getPointOnBezierCurve as getPointOnBezierCurve,
    geometry_getAABB as getAABB,
    geometry_getOBBPoints as getOBBPoints,
    geometry_moveAABB as moveAABB,
    geometry_padBounds as padBounds,
    geometry_overlapsAABB as overlapsAABB,
    geometry_intersects as intersects,
    geometry_overlaps as overlaps
  };
}

interface OgmaParameters {
  dimensions?: {
    width?: number;
    height?: number;
  };
  renderer?: RendererType;
  options?: Options;
  container?: HTMLElement | string;
  graph?: RawGraph;
  imgCrossOrigin?: CrossOriginValue;
}
declare type BuildInfo = {
  version: string;
  commit: string;
  buildTime: string;
};
declare class Ogma<ND = any, ED = any> {
  static libraries: {
    [key: string]: any;
  };
  static geometry: typeof geometry;
  /** @inner */
  styles: StylesAPI<ND, ED>;
  /** @inner */
  algorithms: AlgorithmsAPI<ND, ED>;
  /** @inner */
  export: ExportsAPI<ND, ED>;
  /** @inner */
  keyboard: KeyboardAPI<ND, ED>;
  /** @inner */
  generate: GeneratorsAPI<ND, ED>;
  /** @inner */
  layouts: LayoutsAPI<ND, ED>;
  /** @inner */
  parse: ImportsAPI<ND, ED>;
  /** @inner */
  transformations: TransformationAPI<ND, ED>;
  /** @inner */
  tools: ToolsAPI<ND, ED>;
  /** @inner */
  view: ViewAPI<ND, ED>;
  /** @inner */
  mouse: MouseAPI<ND, ED>;
  /** @inner */
  events: EventsAPI<ND, ED>;
  /** @inner */
  schema: SchemaAPI<ND, ED>;
  /** @inner */
  rules: RulesAPI<ND, ED>;
  /** @inner */
  geo: GeoAPI<ND, ED>;
  /** @inner */
  layers: LayersAPI<ND, ED>;
  build: BuildInfo;
  constructor(parameters?: OgmaParameters);
  /**
   * @method Ogma.destroy
   * Release the memory used and removes all connections between Ogma and the
   * DOM. After this method is called, Ogma's container will not contain any DOM
   * element  created by Ogma. Global DOM elements such as `window` and
   * `document`'s event listeners added by Ogma will be removed. All
   * `setTimeout` created by Ogma will be cleared.
   * @return {void}
   * @example
   * const ogma = new Ogma({
   *   container: 'graph-container'
   * );
   *
   * ogma.setGraph({
   *   nodes: [{id: 0}, {id: 1}],
   *   edges: [{id: 0, source: 0, target: 1}]
   * });
   *
   * ogma.destroy();
   */
  destroy(): void;
  /**
   * @method Ogma.reset
   * Reset Ogma to its initial state. Doing `ogma.reset();` has the same effect as
   * `ogma.destroy(); ogma = new Ogma(params);`, with `params` being the parameters used the
   * first time Ogma was instantiated.
   * @return {void}
   */
  reset(): void;
  static build: BuildInfo;
}
interface Ogma<ND = any, ED = any>
  extends ClassesAPI<ND, ED>,
    CaptorAPI<ND, ED>,
    DomAPI<ND, ED>,
    GraphAPI<ND, ED>,
    GraphicsAPI<ND, ED>,
    SelectionAPI<ND, ED>,
    SettingsAPI<ND, ED> {}

export {
  AdjacencyOptions,
  AttributeAnimationOptions,
  Badge,
  BadgeImage,
  BadgeRequired,
  BoundingBox,
  BrandOptions,
  CSVExportOptions,
  CameraAnimationOptions,
  CanvasLayer,
  Color,
  ConcentricLayoutOptions,
  CrossOriginValue,
  CursorStyle,
  DataChange,
  Dependency,
  Direction,
  DomEvent,
  DropEvent,
  Easing,
  EasingFunction,
  Edge,
  EdgeAttributes,
  EdgeAttributesValue,
  EdgeCollection,
  EdgeDataAndAttributes,
  EdgeDependencies,
  EdgeDirection,
  EdgeExtremity,
  EdgeFilterOptions,
  EdgeGroupingOptions,
  EdgeHalo,
  EdgeId,
  EdgeList,
  EdgeOutput,
  EdgeSelector,
  EdgeShape,
  EdgeStroke,
  EdgeStyle,
  EdgeTextStyle,
  EdgeTextStyleValue,
  EdgeType,
  EdgesDataChange,
  EdgesDataChangeEvent,
  EdgesDataEvent,
  EdgesEvent,
  Filter,
  FontStyle,
  ForceLayoutOptions,
  ForceLinkOptions,
  GeoCoordinate,
  GeoModeOptions,
  GestureEvent,
  GestureProgressEvent,
  GexfExportOptions,
  GraphMLExportOptions,
  GridLayoutOptions,
  Halo,
  HierarchicalLayoutOptions,
  Icon,
  ImageExportOptions,
  IncrementalLayoutOptions,
  InputSource,
  InputTarget,
  Item,
  ItemId,
  ItemList,
  JSONExportOptions,
  KeyCode,
  KeyName,
  Layer,
  LayerValue,
  LayoutCompleteEvent,
  LayoutComputedEvent,
  LayoutEndEvent,
  LayoutOptions,
  LayoutStartEvent,
  LegendOptions,
  LocateOptions,
  MapPosition,
  MouseButton,
  MouseButtonEvent,
  MouseMoveEvent,
  MouseOutEvent,
  MouseOverEvent,
  NeighborGenerationOptions,
  NeighborMergingOptions,
  Neo4JEdgeData,
  Neo4JNodeData,
  Node$1 as Node,
  NodeAttributes,
  NodeAttributesValue,
  NodeCollapsingOptions,
  NodeCollection,
  NodeDataAndAttributes,
  NodeDependencies,
  NodeFilterOptions,
  NodeGroupingOptions,
  NodeId,
  NodeImage,
  NodeList,
  NodeOutput,
  NodeSelector,
  NodeShape,
  NodeStyleRuleDefinition,
  NodeTextStyle,
  NodeTextStyleValue,
  NodesConnectionEvent,
  NodesDataChange,
  NodesDataChangeEvent,
  NodesDataEvent,
  NodesDragEndEvent,
  NodesDragEvent,
  NodesDragProgressEvent,
  NodesEvent,
  NonObjectPropertyWatcher,
  ObjectPropertyWatcher,
  OgmaParameters,
  OpacityValue,
  Options,
  Outline,
  Overlay,
  PixelSize,
  Point,
  PredefinedEdgeShape,
  PropertyPath,
  Pulse,
  RadialLayoutOptions,
  RawEdge,
  RawGraph,
  RawItem$1 as RawItem,
  RawNode,
  RenderStateChangeEvent,
  RendererErrorCode,
  RendererState,
  RendererType,
  ResizeEvent,
  SVGExportOptions,
  ScalingMethod,
  SecondaryEdgeTextStyle,
  SecondaryNodeTextStyle,
  SequentialLayoutOptions,
  SimpleBoundingBox,
  Size,
  Stroke,
  StyleClass,
  StyleClassDefinition,
  StyleRule,
  SubGraphEvent,
  TextAlign,
  TextContent,
  TooltipEvent,
  Transformation,
  TransformationEvent,
  View,
  ViewChangedEvent,
  VirtualPropertiesOptions,
  WatcherOptions,
  XLSXExportOptions,
  ZoomBoundaryFunction,
  Ogma as default
};
