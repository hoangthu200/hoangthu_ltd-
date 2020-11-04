package com.example.manager;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

public class AdapterSinhVien extends BaseAdapter {
    Context context;
    ArrayList<SinhVien>list;

    public AdapterSinhVien(Context context, ArrayList<SinhVien> list) {
        this.context = context;
        this.list = list;
    }

    @Override
    public int getCount() {
        return list.size();
    }

    @Override
    public Object getItem(int position) {
        return null;
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        LayoutInflater inflater= (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View row = inflater.inflate(R.layout.lisview_row,null);
        ImageView imgHinhDaiDien =row.findViewById(R.id.imgHinhDaiDien);
        TextView txtid =row.findViewById(R.id.txtid);
        TextView txtTen =row.findViewById(R.id.txtTen);
        TextView txtSdt =row.findViewById(R.id.txtSdt);

        SinhVien sinhVien=list.get(position);
        txtid.setText(sinhVien.id+"");
        txtTen.setText(sinhVien.ten);
        txtSdt.setText(sinhVien.sdt);
        Bitmap bmHinhDaiDien = BitmapFactory.decodeByteArray(sinhVien.anh, 0 ,sinhVien.anh.length);
        imgHinhDaiDien.setImageBitmap(bmHinhDaiDien);
        return row;
    }
}
