<?php

class Validate {
    public function validateFormData($data) {

        if (empty($data->name)) {
            return false;
        }

        if (empty($data->email)) {
            return false;
        }
        if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        if (empty($data->subject)) {
            return false;
        }

        if (empty($data->message)) {
            return false;
        }

        return true;

    }
}