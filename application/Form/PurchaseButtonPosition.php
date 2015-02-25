<?php

/**
 * LaterPay purchase button position form class.
 *
 * Plugin Name: LaterPay
 * Plugin URI: https://github.com/laterpay/laterpay-wordpress-plugin
 * Author URI: https://laterpay.net/
 */
class LaterPay_Form_PurchaseButtonPosition extends LaterPay_Form_Abstract
{

    /**
     * Implementation of abstract method.
     *
     * @return void
     */
    public function init() {
        $this->set_field(
            'form',
            array(
                'validators' => array(
                    'is_string',
                    'cmp' => array(
                        array(
                            'eq' => 'purchase_button_position',
                        ),
                    ),
                )
            )
        );

        $this->set_field(
            'action',
            array(
                'validators' => array(
                    'is_string',
                    'cmp' => array(
                        array(
                            'eq' => 'laterpay_appearance',
                        ),
                    ),
                )
            )
        );

        $this->set_field(
            '_wpnonce',
            array(
                'validators' => array(
                    'is_string',
                    'cmp' => array(
                        array(
                            'ne' => null,
                        ),
                    ),
                )
            )
        );

        $this->set_field(
            'purchase_button_positioned_manually',
            array(
                'validators' => array(
                    'is_int',
                    'in_array' => array( 1 ),
                ),
                'filters' => array(
                    'to_int',
                ),
                'can_be_null' => true,
            )
        );
    }
}

