'use strict'

const shopModel = require("../models/shop.model")
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const ShopRoles = {
    WRITER: 'WRITER',
    SHOP: 'SHOP',
    EDITOR: 'EDITOR'
}


class AccessService {
    static signUp = async ({ name, email, password }) => {
        try {
            // step 1: check email exists

            const holderShop = await shopModel.findOne({ email }).lean()
            if (holderShop) {
                return {
                    code: 'xxx',
                    message: 'Email is exists'
                }
            }

            const hashPassword = await bcrypt.hash(password, 10)
            const newShop = await shopModel.create({
                name, email, hashPassword, roles: [ShopRoles.SHOP]
            })

            if (newShop) {
                // create privateKey, publicKey
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    mudulusLength: 4096
                })
            }

            console.log('privateKey, publicKey', {privateKey, publicKey})

        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }

}


// static, khong can new, . ra func luon
module.exports = AccessService