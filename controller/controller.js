const mongoose = require('mongoose')
require('dot-env')
const studentModel = require('../model/studentSchema')

const test = ((req, res) => { res.json({ status: '200|controller|OK' }) })

const saveStudent = (async (req, res) => {
    const user = new studentModel(req.body)
    try {
        await user.save();
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

const allStudent = (async (req, res) => {
    try {
        const data = await studentModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }

})

const getStudent = (async (req, res) => {
    // res.json({status : 'ok'})
    let roll = req.path
    roll = roll.split('/')
    roll = Number(roll[1])
    try {
        const data = await studentModel.findOne({ Roll: roll })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

const deleteStudent = (async (req, res) => {
    let roll = req.path
    roll = roll.split('/')
    roll = Number(roll[1])
    try {
        const data = await studentModel.findOneAndRemove({ Roll: roll })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = {
    test, saveStudent, allStudent, getStudent, deleteStudent
}